import Router from "express";
import waterController from "../controllers/waterController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import verifyToken from "../middlewares/tokenValidator.js";
import { waterSchema } from "../schemas/waterSchema.js";

const waterRouter = Router();

waterRouter.post(
  "/water",
  verifyToken,
  schemaValidator(waterSchema),
  waterController.postWater
);
waterRouter.get("/water", verifyToken);

export default waterRouter;
