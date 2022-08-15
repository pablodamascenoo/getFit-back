import { Request, Response } from "express";
import mealService from "../services/mealService.js";

async function postMeal(req: Request, res: Response) {
  const { calories, name } = req.body;
  const { id } = res.locals.user;

  await mealService.createMeal({ userId: id, calories, name });
  return res.sendStatus(201);
}

async function deleteMeal(req: Request, res: Response) {
  const { id } = req.params;
  const { user } = res.locals;

  await mealService.deleteMeal({ userId: user.id, id: parseInt(id) });
  return res.sendStatus(200);
}

const mealController = {
  postMeal,
  deleteMeal,
};

export default mealController;
