import express, { Request, Response } from "express";
import NavbarController from "../crud/navbar";
import Navbar from "../models/navbar";

const router = express.Router();
const Navbar = new NavbarController();

router.get("/", async (req: Request, res: Response) => {
  try {
    const navbarItems = await Navbar.getNavbar();
    res.status(200).json(navbarItems);
  } catch (e:any) {
    console.error("Error retrieving navbar items:", e);
    res.status(e?.code || 500).json({ error: e?.message || "Internal server error" });
  }
});


router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const navbarItem = await Navbar.getNavbarById(id);
    res.status(200).json(navbarItem);
  } 
  catch (e:any) {
    console.error("Error retrieving navbar items:", e);
    res.status(e?.code || 500).json({ error: e?.message || "Internal server error" });
  }
});

router.get("/conf/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const navbarItem = await Navbar.getNavbarByConfId(id);
    res.status(200).json(navbarItem);
  } 
  catch (e:any) {
    console.error("Error retrieving navbar items:", e);
    res.status(e?.code || 500).json({ error: e?.message || "Internal server error" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const navbarItem:Navbar = req.body;
    await Navbar.addNavbar(navbarItem);
    res.status(201).json({ success: "Navbar item added successfully" });
  } catch (e:any) {
    console.error("Error adding navbar item:", e);
    res.status(e?.code || 500).json({ error: e?.message || "Internal server error" });
  }
});


router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const navbarItem:Navbar = req.body;
    await Navbar.updateNavbar(navbarItem, id);
    res.status(200).json({ success: "Navbar item updated successfully" });
  } catch (e:any) {
    console.error("Error retrieving navbar items:", e);
    res.status(e?.code || 500).json({ error: e?.message || "Internal server error" });
  }
});


router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await Navbar.deleteNavbar(id);
    res.status(200).json({ success: "Navbar item deleted successfully" });
  } catch (e:any) {
    console.error("Error retrieving navbar items:", e);
    res.status(e?.code || 500).json({ error: e?.message || "Internal server error" });
  }
});


export default router;



/**
 * @swagger
 * tags:
 *   name: Navbar
 *   description: API endpoints for Navbar
 */


/**
 * @swagger 
 * /navbar:
 *  get:
 *    tags: [Navbar]
 *    description: Get all Navbars
 *    responses:
 *      200:
 *        description: Success response
 *        content:
 *          application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Navbar'
 *      500:
 *       description: Internal server error 
 *       content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *  post:
 *    tags: [Navbar]
 *    summary: Create a new Navbar
 *    description: Create a new Navbar
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/NavbarModel'
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
 * /navbar/{id}:
 *   get:
 *    tags: [Navbar]
 *    description: Get Navbar By Id
 *    summary: Get Navbar By Id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Navbar Id
 *        required: true
 *        schema:
 *         type: string
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Navbar'
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
 *    tags: [Navbar]
 *    summary: Update Navbar
 *    description: Update Navbar
 *    parameters:
 *        - name: id
 *          in: path
 *          description: Navbar Id
 *          required: true
 *          schema:
 *            type: string  
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Navbar'
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
 *    tags: [Navbar]
 *    summary: Delete Navbar
 *    description: Delete Navbar
 *    parameters:
 *     - name: id
 *       in: path
 *       description: Navbar Id
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
 * /navbar/conf/{id}:
 *   get:
 *    tags: [Navbar]
 *    description: Get Navbar By confrence Id
 *    summary: Get Navbar By confrence Id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Navbar Id
 *        required: true
 *        schema:
 *         type: string
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Navbar'
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
 *     Navbar:
 *       type: object
 *       properties:
 *         id:
 *          type: string
 *         confId:
 *          type: string
 *         heading:
 *          type: string
 *         subHeading:
 *          type: string
 *         name:
 *          type: string
 *         url:
 *          type: string 
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
 *     NavbarModel:
 *        type: object
 *        properties:
 *          confId:
 *           type: string
 *          heading:
 *           type: string
 *          subHeading:
 *           type: string
 *          name:
 *           type: string
 *          url:
 *           type: string 
 */
