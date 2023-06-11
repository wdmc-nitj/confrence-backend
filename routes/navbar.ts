import express, { Request, Response } from "express";
import NavbarController from "../crud/navbar";
import Navbar from "../models/navbar";

const router = express.Router();
const Navbar = new NavbarController();

// Get all navbar items
router.get("/", async (req: Request, res: Response) => {
  try {
    const navbarItems = await Navbar.getNavbar();
    res.status(200).json(navbarItems);
  } catch (e:any) {
    console.error("Error retrieving navbar items:", e);
    res.status(500).json({ error: e?.message || "Internal server error" });
  }
});

// Get a single navbar item by id
router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const navbarItem = await Navbar.getNavbarById(id);
    res.status(200).json(navbarItem);
  } 
  catch (e:any) {
    console.error("Error retrieving navbar items:", e);
    res.status(500).json({ error: e?.message || "Internal server error" });
  }
});

// Get a navbar items by conference id
router.get("/conf/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const navbarItem = await Navbar.getNavbarByConfId(id);
    res.status(200).json(navbarItem);
  } 
  catch (e:any) {
    console.error("Error retrieving navbar items:", e);
    res.status(500).json({ error: e?.message || "Internal server error" });
  }
});

// Add a navbar item

router.post("/", async (req: Request, res: Response) => {
  try {
    const navbarItem:Navbar = req.body;
    await Navbar.addNavbar(navbarItem);
    res.status(201).json({ success: "Navbar item added successfully" });
  } catch (e:any) {
    console.error("Error adding navbar item:", e);
    res.status(500).json({ error: e?.message || "Internal server error" });
  }
});


// Update a navbar item

router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const navbarItem:Navbar = req.body;
    await Navbar.updateNavbar(navbarItem, id);
    res.status(200).json({ success: "Navbar item updated successfully" });
  } catch (e:any) {
    console.error("Error retrieving navbar items:", e);
    res.status(500).json({ error: e?.message || "Internal server error" });
  }
});

// Delete a navbar item

router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await Navbar.deleteNavbar(id);
    res.status(200).json({ success: "Navbar item deleted successfully" });
  } catch (e:any) {
    console.error("Error retrieving navbar items:", e);
    res.status(500).json({ error: e?.message || "Internal server error" });
  }
});

export default router;
