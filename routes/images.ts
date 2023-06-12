import express, { Request, Response } from "express";
import {
  createImage,
  getAllImages,
  getImageById,
  updateImageById,
  deleteImageById,
} from "../crud/images";
import Image from "../models/images";

const router = express.Router();




// Create a new image
router.post("/", async (req: Request, res: Response) => {
  try {
    const image: Image = req.body;
    const newImage = await createImage(image);
    res.status(201).json(newImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Retrieve all images
router.get("/", async (req: Request, res: Response) => {
  try {
    const images = await getAllImages();
    res.status(200).json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Retrieve a single image by ID
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const image = await getImageById(id);
    if (!image) {
      res.status(404).json({ message: "Image not found" });
    } else {
      res.status(200).json(image);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Update an image by ID
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const update: Partial<Image> = req.body;
    const updatedImage = await updateImageById(id, update);
    if (!updatedImage) {
      res.status(404).json({ message: "Image not found" });
    } else {
      res.status(200).json(updatedImage);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Delete an image by ID
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const result = await deleteImageById(id);
    if (!result) {
      res.status(404).json({ message: "Image not found" });
    } else {
      res.status(200).json({ success: result });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
export default router;
