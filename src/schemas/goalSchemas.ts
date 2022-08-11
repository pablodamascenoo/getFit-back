import Joi from "joi";

export const goalSchema = Joi.object({
  goal: Joi.number().integer().min(1).required(),
});
