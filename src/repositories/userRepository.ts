import { User } from "@prisma/client";
import client from "../config/database.js";

export type UserSchemaSignUp = Omit<User, "id"> & { confirmPassword: string };
export type UserSchemaSignIn = Omit<
  User,
  "id" | "name" | "weight" | "height" | "gender"
>;
export type UserInsertData = Omit<User, "id">;

async function getUserById(id: number) {
  const foundUser = await client.user.findFirst({
    where: {
      id,
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
    data: {
      ...userData,
    },
  });
}

const userRepository = {
  insert,
  getUserById,
  getUserByEmail,
};

export default userRepository;
