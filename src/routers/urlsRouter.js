import {Router} from "express";

import { createUrl, getUrlById } from "../controllers/urlsController.js";
import tokenValidation from "../middlewares/tokenValidation.js";

const urlRouter = Router();

urlRouter.post("/urls/shorten",tokenValidation,  createUrl);
urlRouter.get("/urls/:id",  getUrlById);

export default urlRouter;