import { NextFunction, Request, Response } from "express";
import prisma from "../config/client";

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

const authenticate = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // Get the user's token from the request, e.g., from the headers or a cookie
    const userToken = req.headers["authorization"];

    if (!userToken) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      // Retrieve the user from the database based on the provided token
      const user = await prisma.user.findUnique({
        where: { token: userToken },
      });

      if (!user) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      // If the user has the access type ADMIN, allow the request to proceed for all request types
      if (user.accessType === "ADMIN") {
        next();
      } else {
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
      }
    } catch (error) {
      console.error("Error retrieving user from the database:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
};

// Helper function to determine the access type based on the request method
const determineAccessTypeFromRequestMethod = (method: string) => {
  if (method === "GET") {
    return "GET";
  } else {
    return "ADMIN";
  }
};

export default verifyAdmin;
export { authenticate, AccessType };
