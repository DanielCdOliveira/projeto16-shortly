import {Router} from "express";

import { createUrl, getUrlById, redirectToUrl } from "../controllers/urlsController.js";
import tokenValidation from "../middlewares/tokenValidation.js";

const urlRouter = Router();

urlRouter.post("/urls/shorten",tokenValidation,  createUrl);
urlRouter.get("/urls/:id",  getUrlById);
urlRouter.get("/urls/open/:shortUrl",  redirectToUrl);

export default urlRouter;