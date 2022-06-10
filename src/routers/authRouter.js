import {Router} from "express";

import { signUp,signIn  } from "../controllers/authController.js";
import {signUpValidation, signInValidation} from "../middlewares/schemaValidation.js";

const authRouter = Router();

authRouter.post("/signup",signUpValidation, signUp);
authRouter.post("/signin",signInValidation, signIn);

export default authRouter;