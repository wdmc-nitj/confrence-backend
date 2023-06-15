import express from "express";
import { Request, Response } from "express";
import Announcement from "../models/announcement";
import { addAnnouncement, getAllAnnouncements, getAnnouncementById, updateAnnouncement, deleteAnnouncement } from '../crud/announcement';

/** 
@swagger

paths:
  /announcements:
    get:
      summary: Get all announcements
      responses:
        200:
          description: OK
          schema:
            type: array
            items:
              $ref: "#/definitions/Announcement"
        500:
          description: Internal Server Error

    post:
      summary: Create a new announcement
      requestBody:
        description: Announcement data
        required: true
        content:
          application/json:
            schema:
              $ref: "#/definitions/Announcement"
      responses:
        201:
          description: Created
          schema:
            $ref: "#/definitions/Announcement"
        400:
          description: Invalid request data
        500:
          description: Internal Server Error
@swagger

  /announcements/{id}:
    get:
      summary: Get announcement by ID
      parameters:
        - name: id
          in: path
          description: ID of the announcement
          required: true
          type: string
      responses:
        200:
          description: OK
          schema:
            $ref: "#/definitions/Announcement"
        404:
          description: Announcement not found
        500:
          description: Internal Server Error

    put:
      summary: Update announcement by ID
      parameters:
        - name: id
          in: path
          description: ID of the announcement
          required: true
          type: string
      requestBody:
        description: Updated announcement data
        required: true
        content:
          application/json:
            schema:
              $ref: "#/definitions/Announcement"
      responses:
        200:
          description: OK
          schema:
            $ref: "#/definitions/Announcement"
        400:
          description: Invalid request data
        404:
          description: Announcement not found
        500:
          description: Internal Server Error
@

    delete:
      summary: Delete announcement by ID
      parameters:
        - name: id
          in: path
          description: ID of the announcement
          required: true
          type: string
      responses:
        200:
          description: OK
        404:
          description: Announcement not found
        500:
          description: Internal Server Error

definitions:
  Announcement:
    type: object
    properties:
      ConfId:
        type: string
      Conf:
        $ref: "#/definitions/Conference"
      Title:
        type: string
      MetaDescription:
        type: string
      Description:
        type: string
      feature:
        type: boolean
      sequence:
        type: number
      New:
        type: boolean
      hidden:
        type: boolean
      Link:
        type: string

  Conference:
    type: object
    properties:
      // Define properties of the Conference object here
      // Example:
      property1:
        type: string
      property2:
        type: number
      // ...
*/
const router = express.Router();

router.get("/announcements", async (req: Request, res: Response) => {
  try {
    
    const announcements: Announcement[] = await getAllAnnouncements();
    res.status(200).json(announcements);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.get("/announcements/:id", async (req: Request, res: Response) => {
    try{
        const id:string=req.params.id;
        const resp=await getAnnouncementById(id);
        res.status(200).json(resp);
    }
    catch(e: any){
        console.log(e);
        res.status(500).json(e?.message || "Internal Server Error");
    }    
  
});

router.post("/announcements", async (req: Request, res: Response) => {
  try {
    const newAnnouncement: Announcement = req.body;
    // Logic to add a new announcement
    await addAnnouncement(newAnnouncement);
    res.status(201).json({ message: "Announcement created successfully" });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});


router.put("/announcements/:id", async (req: Request, res: Response) => {
  try {
    const announcementId: string = req.params.id;
    const updatedAnnouncement: Announcement = req.body;
    await updateAnnouncement(announcementId, updatedAnnouncement);
    res.status(200).json({ message: "Announcement updated successfully" });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.delete("/announcements/:id", async (req: Request, res: Response) => {
  try {
    const announcementId: string = req.params.id;
    await deleteAnnouncement(announcementId);
    res.status(200).json({ message: "Announcement deleted successfully" });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

export default router;
