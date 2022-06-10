import { signUpSchema, signInSchema } from "../schemas/authSchema.js";
import { urlSchema } from "../schemas/urlsSchema.js";
export function signUpValidation(req, res, next) {
  const validation = signUpSchema.validate(req.body, { abortEarly: false });
  if (validation.error) {
    res
      .status(422)
      .send(validation.error.details.map((detail) => detail.message));
  }
  next();
}

export function signInValidation(req, res, next) {
  const validation = signInSchema.validate(req.body, { abortEarly: false });
  if (validation.error) {
    res
      .status(422)
      .send(validation.error.details.map((detail) => detail.message));
  }
  next();
}

export function urlValidation(req, res, next) {
    const validation = urlSchema.validate(req.body, { abortEarly: false });
    if (validation.error) {
      res
        .status(422)
        .send(validation.error.details.map((detail) => detail.message));
    }
    next();
  }
