import {Router} from "express";

import { createUrl, getUrlById } from "../controllers/urlsController.js";


const urlRouter = Router();

urlRouter.post("/urls/shorten",  createUrl);
urlRouter.get("/urls/:id",  getUrlById);

export default urlRouter;