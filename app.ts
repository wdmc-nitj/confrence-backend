import express from "express";
import cors from "cors";

import dotenv from "dotenv";
import bodyParser from "body-parser";
// import verifyAdmin from './utils/middleware';
import { authenticate } from "./utils/middleware";
// routes import
import mainRouter from "./routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(verifyAdmin);
app.use(authenticate());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", mainRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.info(`server up on port ${PORT}`);
});

process.on("uncaughtException", (err) => {
  console.error("There was an uncaught error", err);
  process.exit(1); //mandatory (as per the Node.js docs)
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled rejection at promise", promise, `reason: ${reason}`);
  process.exit(1); //mandatory (as per the Node.js docs)
});
