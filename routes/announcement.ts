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

router.get('/conf/:id', async (req: Request, res: Response) => {
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

/**
 * @swagger
 * tags:
 *   name: Announcement
 *   description: API endpoints for Announcement.
 */


/**
 * @swagger 
 * /announcement:
 *  get:
 *    tags: [Announcement]
 *    description: Get all Announcements
 *    responses:
 *      200:
 *        description: Success response
 *        content:
 *          application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Announcement'
 *      500:
 *       description: Internal server error 
 *       content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *  post:
 *    tags: [Announcement]
 *    summary: Create a new Announcement
 *    description: Create a new Announcement
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/AnnoucmentModel'
 *    responses:
 *     201:
 *      description: success response
 *      content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Success'
 *     400:
 *      description: Bad Request
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Error'
 *     500:
 *        description: Internal server error
 *        content:
 *            application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Error'
 * 
 * 
 */


/**
 * @swagger
 * /announcement/{id}:
 *   get:
 *    tags: [Announcement]
 *    description: Get Annoucment By Id
 *    summary: Get Annoucment By Id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Announcement Id
 *        required: true
 *        schema:
 *         type: string
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Announcement'
 *      500:
 *        description: Internal server error
 *        content:
 *           application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Error'
 *      400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *   put:
 *    tags: [Announcement]
 *    summary: Update Announcement
 *    description: Update Announcement
 *    parameters:
 *        - name: id
 *          in: path
 *          description: Announcement Id
 *          required: true
 *          schema:
 *            type: string  
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/AnnoucmentModel'
 *    responses:
 *     200:
 *      description: Success
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Success'
 *     500:
 *      description: Internal server error
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Error'
 *     400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *   delete:
 *    tags: [Announcement]
 *    summary: Delete Announcement by Id
 *    description: Delete Announcement by Id
 *    parameters:
 *     - name: id
 *       in: path
 *       description: Announcement Id
 *       required: true
 *       schema:
 *         type: string
 *    responses:
 *     200:
 *      description: Success
 *      content:
 *        application/json:
 *            schema:
 *              $ref: '#/components/schemas/Success'
 *     400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *     500:
 *      description: Internal server error
 *      content:
 *        application/json:
 *          schema:
 *              $ref: '#/components/schemas/Error'
 * 
 *     
 */

/**
 * @swagger
 * /announcement/conf/{id}:
 *   get:
 *    tags: [Announcement]
 *    description: Get Announcement By confrence Id
 *    summary: Get Announcement By confrence Id
 *    parameters:
 *      - name: id
 *        in: path
 *        description:  confrence Id
 *        required: true
 *        schema:
 *         type: string
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Announcement'
 *      500:
 *        description: Internal server error
 *        content:
 *           application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Error'
 *      400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 * 
 *     
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Announcement:
 *       type: object
 *       properties:
 *         id:
 *          type: string
 *         confId:
 *           type: string
 *         title:
 *           type: string
 *         metaDescription:
 *            type: string
 *            nullable: true
 *         description:
 *            type: string
 *         feature:
 *            type: boolean
 *         sequence:
 *            type: number
 *         new:
 *            type: boolean       
 *         hidden:
 *            type: boolean   
 *         link:
 *            type: string
 *            nullable: true
 *         createdAt:
 *            type: string
 *            format: date-time
 *         updatedAt:
 *            type: string
 *            format: date-time
 *     Error:
 *        type: object
 *        properties:
 *          error:
 *            type: string
 *     Success:
 *        type: object
 *        properties:
 *          success:
 *            type: string
 *     AnnoucmentModel:
 *        type: object
 *        properties:
 *         confId:
 *           type: string
 *         title:
 *           type: string
 *         metaDescription:
 *            type: string
 *            nullable: true
 *         description:
 *            type: string
 *         feature:
 *            type: boolean
 *         sequence:
 *            type: number
 *         new:
 *            type: boolean
 *         hidden:
 *            type: boolean        
 *         link:
 *            type: string
 *            nullable: true
 */


