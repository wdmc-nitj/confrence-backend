import { Request, Response } from "express";
import committeeModel from "../models/committees";
import prisma from "../config/client";
import HttpException from "../models/http-exception";

export default class CommitteesController {
  // GET /committees/conference/:id
  async getCommitteesByConferenceId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const committees = await prisma.committees.findMany({
        where: { ConfId: id },
      });
      res.json(committees);
    } catch (error: any) {
      throw new HttpException(500, error?.message || "Internal server error");
    }
  }

  // GET /committees
  async getAllCommittees(req: Request, res: Response) {
    try {
      const committees = await prisma.committees.findMany();
      res.json(committees);
    } catch (error: any) {
      throw new HttpException(500, error?.message || "Internal server error");
    }
  }

  // GET /committees/:id
  async getCommitteeById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const committee = await prisma.committees.findUnique({ where: { id } });
      if (committee) {
        res.json(committee);
      } else {
        res.status(404).json({ error: "Committee not found" });
      }
    } catch (error: any) {
      throw new HttpException(500, error?.message || "Internal server error");
    }
  }

  // POST /committees
  async createCommittee(req: Request, res: Response) {
    const newCommittee: committeeModel = req.body;
    try {
      const createdCommittee = await prisma.committees.create({
        data: newCommittee,
      });
      res.json(createdCommittee);
    } catch (error: any) {
      throw new HttpException(500, error?.message || "Internal server error");
    }
  }

  // PUT /committees/:id
  async updateCommittee(req: Request, res: Response) {
    const { id } = req.params;
    const updatedCommittee: committeeModel = req.body;
    try {
      const committee = await prisma.committees.findUnique({ where: { id } });
      if (committee) {
        const updated = await prisma.committees.update({
          where: { id },
          data: updatedCommittee,
        });
        res.json(updated);
      } else {
        res.status(404).json({ error: "Committee not found" });
      }
    } catch (error: any) {
      throw new HttpException(500, error?.message || "Internal server error");
    }
  }

  // DELETE /committees/:id
  async deleteCommittee(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const committee = await prisma.committees.findUnique({ where: { id } });
      if (committee) {
        const deleted = await prisma.committees.delete({ where: { id } });
        res.json(deleted);
      } else {
        res.status(404).json({ error: "Committee not found" });
      }
    } catch (error: any) {
      throw new HttpException(500, error?.message || "Internal server error");
    }
  }
}
