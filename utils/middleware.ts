import { NextFunction, Request, Response } from "express";

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

export default verifyAdmin;
