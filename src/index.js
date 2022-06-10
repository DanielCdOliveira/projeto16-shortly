import express, {json} from "express";
import cors from "cors";

import dotenv from "dotenv";

import authRouter from "./routers/authRouter.js";
import urlRouter from "./routers/urlsRouter.js";
import userRouter from "./routers/usersRouter.js";
import rankingRouter from "./routers/rankingRouter.js";
const app = express();
app.use(json());
app.use(cors());

dotenv.config();

// routes
app.use(authRouter);
app.use(urlRouter);
app.use(userRouter);
app.use(rankingRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});