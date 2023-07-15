import { NextFunction, Request, Response } from "express";
import prisma from "../config/client";
import rateLimit from "express-rate-limit";

const verifyAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.method === "GET") next();
  else {
    let token: any = req.headers["x-secret-access-token"];

    if (!token) {
      return res.status(403).send({
        message: "No token provided!",
      });
    }

    if (token === process.env.ADMIN_TOKEN) {
      next();
    } else {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
  }
};

enum AccessType {
  ADMIN = "ADMIN",
  GET = "GET",
}

const allowAlwaysRoutes = [
  /^\/$/, // /
  /^\/api-docs(?:\/|$)/, // /api-docs and /api-docs/*
  /^\/favicon.ico$/, // /favicon.ico
  /^\/debug-sentry(?:\/|$)/, // /debug-sentry and /debug-sentry/*
];

const adminOnlyRoutes = [
  /^\/users(?:\/|$)/, // /users and /users/*
];

const authenticate = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (allowAlwaysRoutes.some((route) => route.test(req.path))) {
        return next();
      }

      // Get the user's token from the request, e.g., from the headers or a cookie
      const userToken = req.headers["authorization"];

      if (!userToken) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      // Retrieve the user from the database based on the provided token
      const user = await prisma.user.findFirst({
        where: { token: userToken },
      });

      if (!user) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      // return unauthorized if user.disabled is true
      if (user.disabled) {
        return res.status(401).json({
          error:
            "Your API Key has been disabled. The possible reason might be overuse/spam of API or disqualification in a previous round. Contact the admins for more info",
        });
      }

      if (
        adminOnlyRoutes.some((route) => route.test(req.path)) &&
        user.accessType !== AccessType.ADMIN
      ) {
        return res.status(403).json({ error: "Forbidden" });
      }

      // If the user's access type is ADMIN, allow the request to proceed for all request types
      if (user.accessType === AccessType.ADMIN) {
        return next();
      }

      // Determine the required access type based on the request method
      const requiredAccessType = determineAccessTypeFromRequestMethod(
        req.method
      );

      // Check if the user's access type matches the required access type
      if (user.accessType !== requiredAccessType) {
        return res.status(403).json({ error: "Forbidden" });
      }

      // If the user has the required access type, continue to the next middleware or route handler
      next();
    } catch (error) {
      console.error("Error retrieving user from the database:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
};

// Helper function to determine the access type based on the request method
const determineAccessTypeFromRequestMethod = (method: string) => {
  if (method === "GET") {
    return AccessType.GET;
  } else {
    return AccessType.ADMIN;
  }
};

// Rate limiting
const limiter = rateLimit({
  windowMs: 2 * 60 * 1000, // 2 minutes
  max: 80, // Maximum number of requests allowed in the time window
  keyGenerator: (req: Request) => {
    // Use the user's token as the rate limiting identifier
    const userToken = req.headers["authorization"];
    return userToken || ""; // Return an empty string if no token is present
  },
  message: "Too many requests, please try again after a few minutes.",
});

export default verifyAdmin;
export { authenticate, limiter };
