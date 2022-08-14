import { Request, Response } from "express";
import { UserSchemaInfo } from "../repositories/userRepository.js";
import userService from "../services/userService.js";

async function postUserInfo(req: Request, res: Response) {
  const { id } = res.locals.user;
  const userInfo: UserSchemaInfo = req.body;

  await userService.updateUserInfo(id, userInfo);
  return res.sendStatus(200);
}

async function getUserInfo(req: Request, res: Response) {
  const { id } = res.locals.user;

  const userInfo = await userService.getAllUserInfo(id);
  return res.send(userInfo);
}

const userController = {
  getUserInfo,
  postUserInfo,
};

export default userController;
