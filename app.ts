import express from "express";
import cors from "cors";
import * as Sentry from "@sentry/node";
import dotenv from "dotenv";
import bodyParser from "body-parser";
// import verifyAdmin from './utils/middleware';
import { authenticate, limiter } from "./utils/middleware";

// routes import
import mainRouter from "./routes/main";

dotenv.config();

const app = express();
Sentry.init({
  dsn: "https://1510a457585f4bcd84916ce921f54425@o4504547024830464.ingest.sentry.io/4505424217243648",
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Sentry.Integrations.Express({ app }),
    // Automatically instrument Node.js libraries and frameworks
    ...Sentry.autoDiscoverNodePerformanceMonitoringIntegrations(),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

// RequestHandler creates a separate execution context, so that all
// transactions/spans/breadcrumbs are isolated across requests
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

app.use(cors());
app.use(express.urlencoded({ extended: false }));
// app.use(verifyAdmin);
app.use(authenticate());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", limiter, mainRouter);

// Serve the favicon.ico file
app.use(express.static("public"));

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

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
