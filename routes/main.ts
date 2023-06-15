import { Router, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import specs from "../config/docs";

const mainRouter = Router();

// routes import

import conf from "./conf";
import home from "./home";
import navbar from "./navbar";
import participant from "./participant";
import speakersRouter from "./speakers";
import committeesRouter from "./committees";
import usersRouter from "./user";

// crud approach
mainRouter.use("/conf", conf);
mainRouter.use("/home", home);
mainRouter.use("/navbar", navbar);
mainRouter.use("/participant", participant);

// controller approach
mainRouter.use("/speakers", speakersRouter);
mainRouter.use("/committees", committeesRouter);
mainRouter.use("/users", usersRouter);

mainRouter.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

mainRouter.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

export default mainRouter;
