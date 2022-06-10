import joi from "joi";

import { signUpSchema, signInSchema } from "../schemas/authSchema.js";

export default function signUpValidation(req, res, next) {
  const validation = signUpSchema.validate(req.body, { abortEarly: false });
  if(validation.error){
      res.status(422).send(validation.error.details.map(detail=>detail.message))
  }
  next()
}
