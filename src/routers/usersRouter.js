import {Router} from "express";

import getUserUrls from "../controllers/usersController.js";
import tokenValidation from "../middlewares/tokenValidation.js";

const userRouter = Router();

userRouter.get("/users/:id",tokenValidation, getUserUrls);


export default userRouter;