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
 * /home:
 *   get:
 *     summary: fetches all content of home
 *     responses:
 *       200:
 *         description: Return all content of home
 *         content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                         type: object
 *                         properties:
 *                              id: 
 *                                  type: string
 *                              ConfId: 
 *                                  type: string
 *                              ConfName:
 *                                  type: string
 *                              ConfstartDate:
 *                                  type: string
 *                              ConfendDate: 
 *                                  type: string
 *                              AboutConf: 
 *                                  type: string
 *                              AboutIns: 
 *                                  type: string
 *                              YoutubeLink: 
 *                                  type: string
 *                              InstaLink: 
 *                                  type: string
 *                              FacebookLink:
 *                                 type: string
 *                              TwitterLink: 
 *                                type: string
 *                              createdAt:
 *                                type: string
 *                              updatedAt:
 *                                 type: string                              
 *       500:
 *         description: Internal Server Error
 *
 *
 *
 */

/**
 * @swagger
 * /home/{id}:
 *
 *   get:
 *     summary: fetches all content of home by confid
 *     parameters:
 *        - in: query
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: id of the home
 *     responses:
 *       200:
 *         description: Return content of home via confid
 *         content:
 *              application/json:
 *                  schema:
 *                         type: object
 *                         properties:
 *                                  id: 
 *                                      type: string
 *                                  ConfId: 
 *                                      type: string
 *                                  ConfName:
 *                                      type: string
 *                                  ConfstartDate:
 *                                      type: string
 *                                  ConfendDate: 
 *                                      type: string
 *                                  AboutConf: 
 *                                      type: string
 *                                  AboutIns: 
 *                                      type: string
 *                                  YoutubeLink: 
 *                                      type: string
 *                                  InstaLink: 
 *                                      type: string
 *                                  FacebookLink:
 *                                      type: string
 *                                  TwitterLink: 
 *                                      type: string
 *                                  createdAt:
 *                                      type: string
 *                                  updatedAt:
 *                                    type: string                              
 *       500:
 *         description: Internal Server Error
 *
 *
 *
 */

/**
 * @swagger
 * /home:
 *   post:
 *     summary: add content of home
 *     requestBody:
 *          content:
 *             application/json:
 *                 schema:
 *                      type: object
 *                      properties:
 *                              ConfId: 
 *                                  type: string
 *                              ConfName:
 *                                  type: string
 *                              ConfstartDate:
 *                                  type: string
 *                              ConfendDate: 
 *                                  type: string
 *                              AboutConf: 
 *                                  type: string
 *                              AboutIns: 
 *                                  type: string
 *                              YoutubeLink: 
 *                                  type: string
 *                              InstaLink: 
 *                                  type: string
 *                              FacebookLink:
 *                                 type: string
 *                              TwitterLink: 
 *                                type: string
 *                       
 *     responses:
 *       200:
 *         description: Return response of add home
 *         content:
 *              application/json:
 *                  schema:
 *                         type: object                               
 *       500:
 *         description: Internal Server Error
 *
 *
 *
 */

/**
 * @swagger
 * /home/{id}:
 *   put:
 *     summary: update content of home
 *   
 *      requestBody:
 *          content:
 *             application/json:
 *                 schema:
 *                      type: object
 *                      properties:
 *                              ConfId: 
 *                                  type: string
 *                              ConfName:
 *                                  type: string
 *                              ConfstartDate:
 *                                  type: string
 *                              ConfendDate: 
 *                                  type: string
 *                              AboutConf: 
 *                                  type: string
 *                              AboutIns: 
 *                                  type: string
 *                              YoutubeLink: 
 *                                  type: string
 *                              InstaLink: 
 *                                  type: string
 *                              FacebookLink:
 *                                 type: string
 *                              TwitterLink: 
 *                                type: string
 *                       
 *     responses:
 *       200:
 *         description: Return response of add home
 *         content:
 *              application/json:
 *                  schema:
 *                         type: object                               
 *       500:
 *         description: Internal Server Error
 *
 *
 *
 *
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
