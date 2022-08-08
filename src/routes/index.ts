import Router from "express";
import authRouter from "./authRouter.js";
import goalRouter from "./goalRouter.js";

const router = Router();

router.use(authRouter);
router.use(goalRouter);

export default router;
