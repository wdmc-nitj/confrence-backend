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

router.get("/conference/:id", async (req: Request, res: Response) => {
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




