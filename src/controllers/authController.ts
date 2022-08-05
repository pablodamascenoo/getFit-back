import { Request, Response } from "express";
import {
  UserInsertData,
  UserSchemaSignIn,
  UserSchemaSignUp,
} from "../repositories/userRepository.js";
import authService from "../services/authService.js";

async function signUp(req: Request, res: Response) {
  const userData: UserSchemaSignUp = req.body;
  delete userData.confirmPassword;
  await authService.createUser(userData);
  return res.sendStatus(201);
}

async function signIn(req: Request, res: Response) {
  const userData: UserSchemaSignIn = req.body;
  const token = await authService.loginUser(userData);
  return res.send({ token });
}

const authController = {
  signIn,
  signUp,
};

export default authController;
