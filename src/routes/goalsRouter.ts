import { Router } from "express";
import goalController from "../controllers/goalController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import verifyToken from "../middlewares/tokenValidator.js";
import { goalSchema } from "../schemas/goalSchemas.js";

const goalsRouter = Router();

goalsRouter.put(
  "/goals/calories",
  verifyToken,
  schemaValidator(goalSchema),
  goalController.updateCaloriesGoal
);
goalsRouter.put(
  "/goals/water",
  verifyToken,
  schemaValidator(goalSchema),
  goalController.updateWaterGoal
);

export default goalsRouter;
