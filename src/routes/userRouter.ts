import Router from "express";
import userController from "../controllers/userController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import verifyToken from "../middlewares/tokenValidator.js";
import { userInfoSchema } from "../schemas/userSchemas.js";

const userRouter = Router();

userRouter.post(
  "/user/user-info",
  verifyToken,
  schemaValidator(userInfoSchema),
  userController.postUserInfo
);

export default userRouter;
