import Joi from "joi";
import { UserSchemaInfo } from "../repositories/userRepository.js";

export const userInfoSchema = Joi.object<UserSchemaInfo>({
  activity: Joi.string()
    .valid("sedentary", "low", "moderate", "high")
    .required(),
  gender: Joi.string().valid("male", "female").required(),
  height: Joi.number().integer().min(1).required(),
  weight: Joi.number().integer().min(1).required(),
  age: Joi.number().integer().min(1).required(),
  objective: Joi.string().valid("cut", "maintain", "bulk").required(),
});
