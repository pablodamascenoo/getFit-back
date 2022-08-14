import Joi from "joi";
import { WaterSchema } from "../repositories/waterRepository.js";

export const waterSchema = Joi.object<WaterSchema>({
  milliliters: Joi.number().integer().min(1).required(),
});
