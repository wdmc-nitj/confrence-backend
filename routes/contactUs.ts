import express, { Request, Response } from "express";
import Contact from "../models/contactUs";
import {
  createContact,
  getAllContacts,
  getContactById,
  updateContactById,
  deleteContactById,
} from "../crud/contactUs";

const router = express.Router();

// Create a new contact
router.post("/", async (req: Request, res: Response) => {
  try {
    const contact: Contact = req.body;
    const newContact = await createContact(contact);
    res.status(201).json(newContact);
  } catch (error: any) {
    res.status(error.status || 500).json({ message: error.message });
  }
});

// Retrieve all contacts
router.get("/", async (req: Request, res: Response) => {
  try {
    const contacts = await getAllContacts();
    res.status(200).json(contacts);
  } catch (error: any) {
    res.status(error.status || 500).json({ message: error.message });
  }
});

// Retrieve a single contact by ID
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const contact = await getContactById(id);
    res.status(200).json(contact);
  } catch (error: any) {
    res.status(error.status || 500).json({ message: error.message });
  }
});

// Update a contact by ID
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const update: Partial<Contact> = req.body;
    const updatedContact = await updateContactById(id, update);
    res.status(200).json(updatedContact);
  } catch (error: any) {
    res.status(error.status || 500).json({ message: error.message });
  }
});

// Delete a contact by ID
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const result = await deleteContactById(id);
    res.status(200).json({ success: result });
  } catch (error: any) {
    res.status(error.status || 500).json({ message: error.message });
  }
});

export default router;
