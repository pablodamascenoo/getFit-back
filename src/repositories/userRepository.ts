import { User } from "@prisma/client";
import client from "../config/database.js";

export type UserSchemaSignUp = Omit<
  User,
  "id" | "gender" | "height" | "weight" | "activity"
> & { confirmPassword: string };
export type UserSchemaSignIn = Omit<
  UserSchemaSignUp,
  "name" | "confirmPassword"
>;
export type UserInsertData = Omit<UserSchemaSignUp, "confirmPassword">;

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
    data: { ...userData },
  });
}

const userRepository = {
  insert,
  getUserById,
  getUserByEmail,
};

export default userRepository;
