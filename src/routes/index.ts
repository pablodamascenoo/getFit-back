import Router from "express";
import authRouter from "./authRouter.js";
import goalsRouter from "./goalsRouter.js";
import userRouter from "./userRouter.js";
import waterRouter from "./waterRouter.js";

const router = Router();

router.use(authRouter);
router.use(userRouter);
router.use(goalsRouter);
router.use(waterRouter);

export default router;
