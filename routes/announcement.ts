import express from "express";
import { Request, Response } from "express";
import Announcement from "../models/announcement";
import AnnouncementController from "../crud/announcement";

const announcementController = new AnnouncementController();
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const announcements = await announcementController.getAllAnnouncements();
    res.status(200).json(announcements);
  } catch (e: any) {
    res
      .status(e?.status || 500)
      .json({ error: e?.message || "Internal Server Error" });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const resp = await announcementController.getAnnouncementById(id);
    res.status(200).json(resp);
  } catch (e: any) {
    res
      .status(e?.status || 500)
      .json({ error: e?.message || "Internal Server Error" });
  }
});

router.get('/conference/:id', async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const resp = await announcementController.getAnnouncementByConfId(id);
    res.status(200).json(resp);
  } catch (e: any) {
    res
      .status(e?.status || 500)
      .json({ error: e?.message || "Internal Server Error" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const newAnnouncement: Announcement = req.body;
    await announcementController.addAnnouncement(newAnnouncement);
    res.status(201).json({ response: "Announcement created successfully" });
  } catch (e: any) {
    res
      .status(e?.status || 500)
      .json({ error: e?.message || "Internal Server Error" });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const announcementId: string = req.params.id;
    const updatedAnnouncement: Announcement = req.body;
    await announcementController.updateAnnouncement(announcementId, updatedAnnouncement);
    res.status(200).json({ response: "Announcement updated successfully" });
  } catch (e:any) { 
    res
      .status(e?.status || 500)
      .json({ error: e?.message || "Internal Server Error" });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const announcementId: string = req.params.id;
    await announcementController.deleteAnnouncement(announcementId);
    res.status(200).json({ response: "Announcement deleted successfully" });
  } catch (e:any) {
    res
      .status(e?.status || 500)
      .json({ error: e?.message || "Internal Server Error" });
  }
});

export default router;
