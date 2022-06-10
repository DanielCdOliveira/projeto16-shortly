import {Router} from "express";

import { signUp,signIn  } from "../controllers/authController.js";
import signUpValidation from "../middlewares/schemaValidation.js";

const authRouter = Router();

authRouter.post("/signup",signUpValidation, signUp);
authRouter.post("/signin", signIn);

export default authRouter;