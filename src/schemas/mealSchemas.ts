import Joi from "joi";
import { MealSchema } from "../repositories/mealRepository.js";

export const mealSchema = Joi.object<MealSchema>({
  name: Joi.string().required(),
  calories: Joi.number().integer().min(0).required(),
});
