import { Request, Response } from "express";
import goalService from "../services/goalService.js";

async function updateCaloriesGoal(req: Request, res: Response) {
  const { user } = res.locals;
  const { goal } = req.body;

  await goalService.updateCaloriesGoal({
    userId: user.id,
    caloriesGoal: goal,
  });
  return res.sendStatus(200);
}

async function updateWaterGoal(req: Request, res: Response) {
  const { user } = res.locals;
  const { goal } = req.body;

  await goalService.updateWaterGoal({
    userId: user.id,
    waterGoal: goal,
  });
  return res.sendStatus(200);
}

const goalController = {
  updateCaloriesGoal,
  updateWaterGoal,
};

export default goalController;
