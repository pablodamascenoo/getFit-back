import { Request, Response } from "express";
import { UserSchemaInfo } from "../repositories/userRepository.js";
import userService from "../services/userService.js";

async function postUserInfo(req: Request, res: Response) {
  const { id } = res.locals.user;
  const userInfo: UserSchemaInfo = req.body;

  await userService.updateUserInfo(id, userInfo);
  return res.sendStatus(200);
}

const userController = {
  postUserInfo,
};

export default userController;
