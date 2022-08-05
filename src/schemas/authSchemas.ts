import Joi from "joi";
import {
  UserSchemaSignIn,
  UserSchemaSignUp,
} from "../repositories/userRepository.js";

export const signUpSchema = Joi.object<UserSchemaSignUp>({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(5).required(),
  confirmPassword: Joi.any()
    .valid(Joi.ref("password"))
    .required()
    .messages({ "any.required": "passwords must match" }),
  height: Joi.number().integer().min(1).required(),
  weight: Joi.number().integer().min(1).required(),
  gender: Joi.string().valid("male", "female").required(),
});

export const signInSchema = Joi.object<UserSchemaSignIn>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
