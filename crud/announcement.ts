import Announcement from "../models/announcement";
import prisma from "../config/client";
import HttpException from "../models/http-exception";

export default class AnnouncementController {
  async addAnnouncement(announcement: Announcement) {
    try {
      await prisma.announcement.create({ data: announcement });
    } catch (e: any) {
      throw new HttpException(500, e?.message || "Internal Server Error");
    }
  }

  async getAnnouncementById(id: string) {
    if (!id) {
      throw new HttpException(400, "Invalid Id");
    }
    try {
      return await prisma.announcement.findFirst({ where: { id: id } });
    } catch (e: any) {
      throw new HttpException(500, e?.message || "Internal Server Error");
    }
  }

  async getAnnouncementByConfId(id: string) {
    if (!id) {
      throw new HttpException(400, "Invalid Id");
    }
    try {
      return await prisma.announcement.findMany({ where: { confId: id } });
    } catch (e: any) {
      throw new HttpException(500, e?.message || "Internal Server Error");
    }
  }

  async getAllAnnouncements() {
    try {
      return await prisma.announcement.findMany();
    } catch (e: any) {
      throw new HttpException(500, e?.message || "Internal Server Error");
    }
  }

  async updateAnnouncement(id: string, announcement: Announcement) {
    if (!id) {
      throw new HttpException(400, "Invalid Id");
    }
    try {
      await prisma.announcement.update({
        where: { id: id },
        data: announcement,
      });
    } catch (e: any) {
      throw new HttpException(500, e?.message || "Internal Server Error");
    }
  }

  async deleteAnnouncement(id: string) {
    if (!id) {
      throw new HttpException(400, "Invalid Id");
    }
    try {
      await prisma.announcement.delete({ where: { id: id } });
    } catch (e: any) {
      throw new HttpException(500, e?.message || "Internal Server Error");
    }
  }
}
