import userRepository, {
  UserInsertData,
  UserSchemaSignIn,
} from "../repositories/userRepository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function createUser(userData: UserInsertData) {
  const foundUser = await userRepository.getUserByEmail(userData.email);
  if (foundUser) throw { status: 409, message: "email is already registered" };

  userData.password = cryptPassword(userData.password);
  await userRepository.insert(userData);
}

async function loginUser(userData: UserSchemaSignIn) {
  const foundUser = await userRepository.getUserByEmail(userData.email);
  if (!foundUser) throw { status: 401, message: "invalid user/password" };
  comparePassword(userData.password, foundUser.password);
  const token = genToken(foundUser.id);
  return token;
}

function cryptPassword(password: string) {
  const SALT = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, SALT);
}

function comparePassword(password: string, cryptedPassword: string) {
  if (!bcrypt.compareSync(password, cryptedPassword))
    throw { status: 401, message: "invalid user/password" };
}

function genToken(id: number) {
  const data = { id };
  const config = { expiresIn: process.env.JWT_EXPIRES };
  const token = jwt.sign(data, process.env.JWT_SECRET, config);
  return token;
}

const authService = {
  createUser,
  loginUser,
};

export default authService;
