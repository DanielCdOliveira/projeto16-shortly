import express, {json} from "express";
import cors from "cors";

import dotenv from "dotenv";

import authRouter from "./routers/authRouter.js";
import urlRouter from "./routers/urlsRouter.js";

const app = express();
app.use(json());
app.use(cors());

dotenv.config();

// routes
app.use(authRouter);
app.use(urlRouter);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});