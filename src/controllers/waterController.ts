import { Request, Response } from "express";
import waterService from "../services/waterService.js";

async function postWater(req: Request, res: Response) {
  const { milliliters } = req.body;
  const { id } = res.locals.user;

  await waterService.createWater({ userId: id, milliliters });
  return res.sendStatus(201);
}

const waterController = {
  postWater,
};

export default waterController;
