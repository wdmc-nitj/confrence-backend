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
      const user = await prisma.user.findFirst({
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

  async deleteAllUsers(req: Request, res: Response) {
    try {
      await prisma.user.deleteMany();

      res.json({ message: "All users deleted successfully" });
    } catch (error: any) {
      throw new HttpException(500, error?.message || "Internal server error");
    }
  }

  async getUserByTeam(req: Request, res: Response) {
    const team = req.params.team;

    try {
      const user = await prisma.user.findFirst({
        where: {
          team,
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

  async getUserByToken(req: Request, res: Response) {
    const token = req.params.token;

    try {
      const user = await prisma.user.findFirst({
        where: {
          token,
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

  async getUsersByAccessType(req: Request, res: Response) {
    const accessType = req.params.accessType;

    try {
      const users = await prisma.user.findMany({
        where: {
          accessType,
        },
      });

      if (!users) {
        res.status(404).json({ error: "Users not found" });
      } else {
        res.json(users);
      }
    } catch (error: any) {
      throw new HttpException(500, error?.message || "Internal server error");
    }
  }

  async addUsersInBulk(req: Request, res: Response) {
    const users = req.body as userInterface[];

    try {
      const createdUsers = await prisma.user.createMany({
        data: users,
      });

      res.json(createdUsers);
    } catch (error: any) {
      throw new HttpException(500, error?.message || "Internal server error");
    }
  }
}
