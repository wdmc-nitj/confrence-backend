import { Router, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import specs from "../config/docs";

const mainRouter = Router();

// routes import

import awardsRouter from "./awards";
import committeesRouter from "./committees";
import conf from "./conf";
import eventDateRouter from "./eventDate";
import home from "./home";
import navbar from "./navbar";
import participant from "./participant";
import speakersRouter from "./speakers";
import sponsorsRouter from "./sponsors";
import usersRouter from "./user";

// crud approach
mainRouter.use("/conf", conf);
mainRouter.use("/home", home);
mainRouter.use("/navbar", navbar);
mainRouter.use("/participant", participant);

// controller approach
mainRouter.use("/awards", awardsRouter);
mainRouter.use("/committees", committeesRouter);
mainRouter.use("/eventDates", eventDateRouter);
mainRouter.use("/speakers", speakersRouter);
mainRouter.use("/sponsors", sponsorsRouter);
mainRouter.use("/users", usersRouter);

mainRouter.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

mainRouter.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

export default mainRouter;
