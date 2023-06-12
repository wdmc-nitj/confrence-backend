import { Request, Response } from "express";
import speakerModel from "../models/speakers";
import prisma from "../config/client";
import HttpException from "../models/http-exception";

export default class SpeakersController {
  // GET /speakers/conference/:id
  async getSpeakersByConferenceId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const speakers = await prisma.speakers.findMany({
        where: { ConfId: id },
      });
      res.json(speakers);
    } catch (error: any) {
      throw new HttpException(500, error?.message || "Internal server error");
    }
  }

  // GET /speakers
  async getAllSpeakers(req: Request, res: Response) {
    try {
      const speakers = await prisma.speakers.findMany();
      res.json(speakers);
    } catch (error: any) {
      throw new HttpException(500, error?.message || "Internal server error");
    }
  }

  // GET /speakers/:id
  async getSpeakerById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const speaker = await prisma.speakers.findUnique({ where: { id } });
      if (speaker) {
        res.json(speaker);
      } else {
        res.status(404).json({ error: "Speaker not found" });
      }
    } catch (error: any) {
      throw new HttpException(500, error?.message || "Internal server error");
    }
  }

  // POST /speakers
  async createSpeaker(req: Request, res: Response) {
    const newSpeaker: speakerModel = req.body;
    try {
      const createdSpeaker = await prisma.speakers.create({
        data: newSpeaker,
      });
      res.json(createdSpeaker);
    } catch (error: any) {
      throw new HttpException(500, error?.message || "Internal server error");
    }
  }

  // PUT /speakers/:id
  async updateSpeaker(req: Request, res: Response) {
    const { id } = req.params;
    const updatedSpeaker: speakerModel = req.body;
    try {
      const speaker = await prisma.speakers.findUnique({ where: { id } });
      if (speaker) {
        const updated = await prisma.speakers.update({
          where: { id },
          data: updatedSpeaker,
        });
        res.json(updated);
      } else {
        res.status(404).json({ error: "Speaker not found" });
      }
    } catch (error: any) {
      throw new HttpException(500, error?.message || "Internal server error");
    }
  }

  // DELETE /speakers/:id
  async deleteSpeaker(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const speaker = await prisma.speakers.findUnique({ where: { id } });
      if (speaker) {
        const deleted = await prisma.speakers.delete({ where: { id } });
        res.json(deleted);
      } else {
        res.status(404).json({ error: "Speaker not found" });
      }
    } catch (error: any) {
      throw new HttpException(500, error?.message || "Internal server error");
    }
  }
}
