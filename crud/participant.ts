import participant from "../models/participant";
import prisma from "../config/client";
import HttpException from "../models/http-exception";

export default class participantController {
  async addParticipant(participant: participant) {
    try {
      return await prisma.participant.create({ data: participant });
    } catch (e: any) {
      throw new HttpException(500, e?.message || "Internal Server Error");
    }
  }

  async getParticipantById(id: string) {
    if (!id) {
      throw new HttpException(400, "Invalid Id");
    }

    try {
      return await prisma.participant.findFirst({ where: { id: id } });
    } catch (e: any) {
      throw new HttpException(500, e?.message || "Internal Server Error");
    }
  }

  async getParticipant() {
    try {
      return await prisma.participant.findMany();
    } catch (e: any) {
      throw new HttpException(500, e?.message || "Internal Server Error");
    }
  }

  async getParticipantByConfId(id: string) {
    try {
      return await prisma.participant.findMany({ where: { ConfId: id } });
    } catch (e: any) {
      throw new HttpException(500, e?.message || "Internal Server Error");
    }
  }

  async updateParticipant(participant: participant, id: string) {
    try {
      await prisma.participant.update({
        where: { id: id },
        data: participant,
      });
    } catch (e: any) {
      throw new HttpException(500, e?.message || "Internal Server Error");
    }
  }

  async deleteParticipant(id: string) {
    if (!id) {
      throw new HttpException(400, "Invalid Id");
    }

    try {
      await prisma.participant.delete({ where: { id: id } });
    } catch (e:any) {
      throw new HttpException(500, e?.message || "Internal Server Error");
    }
  };
}
