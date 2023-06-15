import express from "express";
import { Request, Response } from "express";
import home from "../models/home";
import HomeController from "../crud/home";

const router = express.Router();
const homeController = new HomeController();

router.get("/", async (req: Request, res: Response) => {
  try {
    const home = await homeController.getHome();
    res.status(200).json(home);
  } 
  catch (e:any) {
    console.error("Error home items:", e);
    res.status(e?.code || 500).json({ error: e?.message || "Internal server error" });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const home = await homeController.getHomeById(req.params.id);
    res.status(200).json(home);
  } 
  catch (e:any) {
    console.error("Error home items:", e);
    res.status(e?.code || 500).json({ error: e?.message || "Internal server error" });
  }
});

router.get("/conf/:id", async (req: Request, res: Response) => {
  try {
    const home = await homeController.getHomeByConfId(req.params.id);
    res.status(200).json(home);
  } catch (e:any) {
    console.error("Error home items:", e);
    res.status(e?.code || 500).json({ error: e?.message || "Internal server error" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const home: home = req.body;
    await homeController.addHome(home);
    res.status(201).json({ response: "Home Added Successfully" });
  }catch (e:any) {
    console.error("Error home items:", e);
    res.status(e?.code || 500).json({ error: e?.message || "Internal server error" });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const home: home = req.body;
    await homeController.updateHome(home, req.params.id);
    res.status(200).json({ response: "Home Updated Successfully" });
  } catch (e:any) {
    console.error("Error home items:", e);
    res.status(e?.code || 500).json({ error: e?.message || "Internal server error" });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    await homeController.deleteHome(req.params.id);
    res.status(200).json({ response: "Home Deleted Successfully" });
  } catch (e:any) {
    console.error("Error home items:", e);
    res.status(e?.code || 500).json({ error: e?.message || "Internal server error" });
  }
});

export default router;


/**
 * @swagger
 * tags:
 *   name: Home
 *   description: API endpoints for Home
 */


/**
 * @swagger 
 * /home:
 *  get:
 *    tags: [Home]
 *    description: Get all Home
 *    responses:
 *      200:
 *        description: Success response
 *        content:
 *          application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Home'
 *      500:
 *       description: Internal server error 
 *       content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *  post:
 *    tags: [Home]
 *    summary: Create a new Home
 *    description: Create a new Home
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/HomeModel'
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
 * /home/{id}:
 *   get:
 *    tags: [Home]
 *    description: Get Home By Id
 *    summary: Get Home By Id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Home Id
 *        required: true
 *        schema:
 *         type: string
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Home'
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
 *    tags: [Home]
 *    summary: Update Home
 *    description: Update Home
 *    parameters:
 *        - name: id
 *          in: path
 *          description: Home Id
 *          required: true
 *          schema:
 *            type: string  
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Home'
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
 *    tags: [Home]
 *    summary: Delete Home
 *    description: Delete Home
 *    parameters:
 *     - name: id
 *       in: path
 *       description: Home Id
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
 * /home/conf/{id}:
 *   get:
 *    tags: [Home]
 *    description: Get Home By confrence Id
 *    summary: Get Home By confrence Id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Home Id
 *        required: true
 *        schema:
 *         type: string
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Home'
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
 *     Home:
 *       type: object
 *       properties:
 *         id:
 *          type: string
 *         confId:
 *           type: string
 *         confName:
 *           type: string
 *         confStartDate:
 *           type: string
 *           format: date-time
 *         confEndDate:
 *            type: string
 *            format: date-time
 *         aboutConf:
 *            type: string
 *         aboutIns:
 *            type: string
 *            nullable: true
 *         youtubeLink:
 *            type: string
 *            nullable: true
 *         instaLink:
 *            type: string
 *            nullable: true
 *         facebookLink:
 *            type: string
 *            nullable: true
 *         twitterLink:
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
 *     HomeModel:
 *        type: object
 *        properties:
 *          confId:
 *            type: string
 *          confName:
 *            type: string
 *          confStartDate:
 *            type: string
 *            format: date-time
 *          confEndDate:
 *            type: string
 *            format: date-time
 *          aboutConf:
 *            type: string
 *          aboutIns:
 *            type: string
 *            nullable: true
 *          youtubeLink:
 *            type: string
 *            nullable: true
 *          instaLink:
 *            type: string
 *            nullable: true
 *          facebookLink:
 *            type: string
 *            nullable: true
 *          twitterLink:
 *            type: string
 *            nullable: true
 */

