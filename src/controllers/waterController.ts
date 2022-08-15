import { Request, Response } from "express";
import waterService from "../services/waterService.js";

async function postWater(req: Request, res: Response) {
  const { milliliters } = req.body;
  const { id } = res.locals.user;

  await waterService.createWater({ userId: id, milliliters });
  return res.sendStatus(201);
}

async function deleteWater(req: Request, res: Response) {
  const { id } = req.params;
  const { user } = res.locals;

  await waterService.deleteWater({ userId: user.id, id: parseInt(id) });
  return res.sendStatus(200);
}

const waterController = {
  postWater,
  deleteWater,
};

export default waterController;
