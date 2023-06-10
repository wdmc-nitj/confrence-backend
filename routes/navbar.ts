import express, { Request, Response } from 'express';
import navbar, { subheading } from "../models/navbar";
import {
  addNavbar,
  getNavbar,
  getNavbarById,
  updateNavbar,
  deleteNavbar,
} from "../crud/navbar";
const router = express.Router();

// Get all navbar items
router.get('/', async (req: Request, res: Response) => {
  try {
    const navbarItems: navbar[] = await getNavbar();
    res.json(navbarItems);
  } catch (error) {
    console.error('Error retrieving navbar items:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a single navbar item by id
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const navbarItem = await getNavbarById(id);
    if (navbarItem) {
      res.json(navbarItem);
    } else {
      res.status(404).json({ error: 'Navbar item not found' });
    }
  } catch (error) {
    console.error('Error retrieving navbar item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new navbar item
router.post('/', async (req: Request, res: Response) => {
  const { mainHeadingName, mainHeadingLink, subheading } = req.body;
  try {
    const navbarItem: navbar = {
      mainHeadingName,
      mainHeadingLink,
      subheading,
    };

    const createdNavbar = await addNavbar(navbarItem);
    res.json(createdNavbar);
  } catch (error) {
    console.error('Error creating navbar item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update a navbar item by id
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { mainHeadingName, mainHeadingLink, subheading } = req.body;
  try {
    const navbarItem = await updateNavbar(
      { mainHeadingName, mainHeadingLink, subheading },  // data to update navbar item
      id,  // id of navbar item to update
    );
    res.json(navbarItem);
  } catch (error) {
    console.error('Error updating navbar item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a navbar item by id
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const navbarItem = await deleteNavbar(id);
    res.json(navbarItem);
  } catch (error) {
    console.error('Error deleting navbar item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
