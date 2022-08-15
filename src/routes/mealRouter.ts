import { Router } from "express";
import mealController from "../controllers/mealController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import verifyToken from "../middlewares/tokenValidator.js";
import { mealSchema } from "../schemas/mealSchemas.js";

const mealRouter = Router();

mealRouter.post(
  "/meals",
  verifyToken,
  schemaValidator(mealSchema),
  mealController.postMeal
);

mealRouter.delete("/meals/:id", verifyToken, mealController.deleteMeal);

export default mealRouter;
