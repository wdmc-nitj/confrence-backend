import express from "express";
import { Request, Response } from "express";
import home from "../models/home";
import {
  addHome,
  getHome,
  getHomeById,
  updateHome,
  deleteHome,
} from "../crud/home";

/**
 * @swagger
 * components:
 *   schemas:
 *     Home:
 *       type: object
 *       required:
 *         - ConfId
 *         - ConfName
 *         - ConfstartDate
 *         - ConfendDate
 *         - AboutConf
 *         - AboutIns
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the home content
 *         ConfId:
 *           type: string
 *           description: The ID of the conference associated with the home content
 *         ConfName:
 *           type: string
 *           description: The name of the conference
 *         ConfstartDate:
 *           type: string
 *           description: The start date of the conference
 *         ConfendDate:
 *           type: string
 *           description: The end date of the conference
 *         AboutConf:
 *           type: string
 *           description: The description of the conference
 *         AboutIns:
 *           type: string
 *           description: The description of the institution hosting the conference
 *         YoutubeLink:
 *           type: string
 *           description: The YouTube link for the conference
 *         InstaLink:
 *           type: string
 *           description: The Instagram link for the conference
 *         FacebookLink:
 *           type: string
 *           description: The Facebook link for the conference
 *         TwitterLink:
 *           type: string
 *           description: The Twitter link for the conference
 *         createdAt:
 *           type: string
 *           description: The date and time the home content was created
 *         updatedAt:
 *           type: string
 *           description: The date and time the home content was last updated
 *       example:
 *         ConfId: "12345"
 *         ConfName: "Conference 1"
 *         ConfstartDate: "2022-01-01T00:00:00.000Z"
 *         ConfendDate: "2022-01-03T00:00:00.000Z"
 *         AboutConf: "This is a conference about X"
 *         AboutIns: "This conference is hosted by Y"
 */

/**
 * @swagger
 * tags:
 *   name: Home
 *   description: API for managing home content
 */

/**
 * @swagger
 * /home:
 *   get:
 *     summary: Fetch all home content
 *     tags: [Home]
 *     responses:
 *       200:
 *         description: Return all home content
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Home'
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /home/{id}:
 *   get:
 *     summary: Fetch home content by ID
 *     tags: [Home]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the home content
 *     responses:
 *       200:
 *         description: Return home content by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Home'
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /home:
 *   post:
 *     summary: Add home content
 *     tags: [Home]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Home'
 *     responses:
 *       201:
 *         description: Return response of add home content
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /home/{id}:
 *   put:
 *     summary: Update home content by ID
 *     tags: [Home]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the home content
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Home'
 *     responses:
 *       200:
 *         description: Return response of update home content
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       500:
 *         description: Internal Server Error
 */

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const home = await getHome();
    res.status(200).json(home);
  } catch (e: any) {
    res.status(500).send(e?.message || "Internal Server Error");
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const home = await getHomeById(req.params.id);
    res.status(200).json(home);
  } catch (e: any) {
    res.status(500).send(e?.message || "Internal Server Error");
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const home: home = req.body;
    await addHome(home);
    res.status(201).json({ response: "Home Added Successfully" });
  } catch (e: any) {
    res.status(500).send(e?.message || "Internal Server Error");
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const home: home = req.body;
    await updateHome(home, req.params.id);
    res.status(200).json({ response: "Home Updated Successfully" });
  } catch (e: any) {
    res.status(500).send(e?.message || "Internal Server Error");
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    await deleteHome(req.params.id);
    res.status(200).json({ response: "Home Deleted Successfully" });
  } catch (e: any) {
    res.status(500).send(e?.message || "Internal Server Error");
  }
});

export default router;
