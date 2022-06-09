import {Router} from "express";

import { createUrl } from "../controllers/urlsController.js";


const urlRouter = Router();

urlRouter.post("/urls/shorten",  createUrl);


export default urlRouter;