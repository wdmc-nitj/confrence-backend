import { Request, Response } from "express";
import prisma from "../config/client";
import HttpException from "../models/http-exception";
import userInterface from "../models/user";

export default class User {
  async createUser(req: Request, res: Response) {
    const { team, token, accessType } = req.body as userInterface;

    try {
      const user = await prisma.user.create({
        data: {
          team,
          token,
          accessType,
        },
      });

      res.json(user);
    } catch (error: any) {
      throw new HttpException(500, error?.message || "Internal server error");
    }
  }

  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await prisma.user.findMany();
      res.json(users);
    } catch (error: any) {
      throw new HttpException(500, error?.message || "Internal server error");
    }
  }

  async getUserById(req: Request, res: Response) {
    const userId = req.params.id;

    try {
      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });

      if (!user) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.json(user);
      }
    } catch (error: any) {
      throw new HttpException(500, error?.message || "Internal server error");
    }
  }

  async updateUser(req: Request, res: Response) {
    const userId = req.params.id;
    const { team, token, accessType } = req.body as userInterface;

    try {
      const updatedUser = await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          team,
          token,
          accessType,
        },
      });

      res.json(updatedUser);
    } catch (error: any) {
      throw new HttpException(500, error?.message || "Internal server error");
    }
  }

  async deleteUser(req: Request, res: Response) {
    const userId = req.params.id;

    try {
      await prisma.user.delete({
        where: {
          id: userId,
        },
      });

      res.json({ message: "User deleted successfully" });
    } catch (error: any) {
      throw new HttpException(500, error?.message || "Internal server error");
    }
  }
}
