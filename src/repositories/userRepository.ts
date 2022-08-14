import { User } from "@prisma/client";
import client from "../config/database.js";

export type UserSchemaSignUp = Omit<
  User,
  "id" | "gender" | "height" | "weight" | "activity" | "age" | "objective"
> & { confirmPassword: string };
export type UserSchemaSignIn = Omit<
  UserSchemaSignUp,
  "name" | "confirmPassword"
>;
export type UserInsertData = Omit<UserSchemaSignUp, "confirmPassword">;
export type UserSchemaInfo = Omit<User, "id" | "name" | "password" | "email">;

async function getUserById(id: number) {
  const foundUser = await client.user.findFirst({
    where: {
      id,
    },
  });

  return foundUser;
}

async function getAllUserInfo(id: number) {
  const foundUser = await client.user.findFirst({
    where: {
      id,
    },
    include: {
      goal: {},
      meal: {},
      water: {},
    },
  });

  return foundUser;
}

async function getUserByEmail(email: string) {
  const foundUser = await client.user.findFirst({
    where: {
      email,
    },
  });

  return foundUser;
}

async function insert(userData: UserInsertData) {
  await client.user.create({
    data: { ...userData },
  });
}

async function update(id: number, data: UserSchemaInfo) {
  await client.user.update({
    where: {
      id,
    },
    data: {
      ...data,
    },
  });
}

const userRepository = {
  getAllUserInfo,
  insert,
  getUserById,
  getUserByEmail,
  update,
};

export default userRepository;
