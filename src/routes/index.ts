import Router from "express";
import authRouter from "./authRouter.js";
import goalsRouter from "./goalsRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use(authRouter);
router.use(userRouter);
router.use(goalsRouter);

export default router;
