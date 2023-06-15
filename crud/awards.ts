import { Request, Response } from "express";
import awardsModel from "../models/awards";
import prisma from "../config/client";
import HttpException from "../models/http-exception";

export default class AwardsController {
  // GET /awards/conference/:id
  async getAwardsByConferenceId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const awards = await prisma.awards.findMany({
        where: { confId: id },
      });
      res.json(awards);
    } catch (error: any) {
      throw new HttpException(500, error?.message || "Internal server error");
    }
  }

  // GET /awards
  async getAllAwards(req: Request, res: Response) {
    try {
      const awards = await prisma.awards.findMany();
      res.json(awards);
    } catch (error: any) {
      throw new HttpException(500, error?.message || "Internal server error");
    }
  }

  // GET /awards/:id
  async getAwardById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const award = await prisma.awards.findFirst({ where: { id } });
      if (award) {
        res.json(award);
      } else {
        res.status(404).json({ error: "Award not found" });
      }
    } catch (error: any) {
      throw new HttpException(500, error?.message || "Internal server error");
    }
  }

  // POST /awards
  async createAward(req: Request, res: Response) {
    const newAward: awardsModel = req.body;
    try {
      const createdAward = await prisma.awards.create({
        data: newAward,
      });
      res.json(createdAward);
    } catch (error: any) {
      throw new HttpException(500, error?.message || "Internal server error");
    }
  }

  // PUT /awards/:id
  async updateAward(req: Request, res: Response) {
    const { id } = req.params;
    const updatedAward: awardsModel = req.body;
    try {
      const award = await prisma.awards.findFirst({ where: { id } });
      if (award) {
        const updated = await prisma.awards.update({
          where: { id },
          data: updatedAward,
        });
        res.json(updated);
      } else {
        res.status(404).json({ error: "Award not found" });
      }
    } catch (error: any) {
      throw new HttpException(500, error?.message || "Internal server error");
    }
  }

  // DELETE /awards/:id
  async deleteAward(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const award = await prisma.awards.findFirst({ where: { id } });
      if (award) {
        const deleted = await prisma.awards.delete({ where: { id } });
        res.json(deleted);
      } else {
        res.status(404).json({ error: "Award not found" });
      }
    } catch (error: any) {
      throw new HttpException(500, error?.message || "Internal server error");
    }
  }
}
