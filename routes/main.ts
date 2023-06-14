import { Router, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import specs from "../config/docs";

const mainRouter = Router();

// routes import

// import awards from './routes/awards';
import conf from "./conf";
// import eventDate from './routes/eventDate';
import home from "./home";
import navbar from "./navbar";
import participant from "./participant";
// import sponsorsRouter from './routes/sponsors';
import speakersRouter from "./speakers";
import committeesRouter from "./committees";
import usersRouter from "./user";

// app.use('/awards', awards);
mainRouter.use("/conf", conf);
// mainRouter.use('/eventDates', eventDate);
mainRouter.use("/home", home);
mainRouter.use("/navbar", navbar);
mainRouter.use("/participant", participant);
// mainRouter.use('/sponsors', sponsorsRouter);
mainRouter.use("/speakers", speakersRouter);
mainRouter.use("/committees", committeesRouter);
mainRouter.use("/users", usersRouter);

mainRouter.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

mainRouter.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

export default mainRouter;
