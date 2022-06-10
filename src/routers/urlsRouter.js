import {Router} from "express";

import { createUrl, getUrlById, redirectToUrl,deleteUrl } from "../controllers/urlsController.js";
import tokenValidation from "../middlewares/tokenValidation.js";
import checkUrlUser from "../middlewares/urlUserValidation.js";
import { urlValidation } from "../middlewares/schemaValidation.js";

const urlRouter = Router();

urlRouter.post("/urls/shorten",tokenValidation,urlValidation,  createUrl);
urlRouter.get("/urls/:id", getUrlById);
urlRouter.get("/urls/open/:shortUrl",  redirectToUrl);
urlRouter.delete("/urls/:id",tokenValidation,checkUrlUser, deleteUrl);




    
export default urlRouter;