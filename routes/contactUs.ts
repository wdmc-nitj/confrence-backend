import express from 'express'
import { Request, Response } from 'express'
import ContactUs from '../models/contactUs'
import ContactUsController from '../crud/contactUs'

const router = express.Router()
const contactUsController = new ContactUsController()

router.get('/:confId', async (req: Request, res: Response) => {
  try {
    const { confId } = req.params
    if (!confId) {
      res.status(400).json({ message: 'Conference ID is required' })
    }
    const contacts = await contactUsController.getAllContacts(confId)
    if (!contacts) {
      res.status(404).json({ message: 'No contacts found' })
    }
    res.status(200).json(contacts)
  } catch (e: any) {
    res.status(500).json({ message: e?.meta?.cause || 'Internal Server Error' })
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const newContact: ContactUs = req.body
    if (!newContact.confId) {
      res.status(400).json({ message: 'Conference ID is required' })
    }
    const contact = await contactUsController.addContact(newContact)
    res.status(201).json({ message: 'Contact added successfully'})
  } catch (e: any) {
    res.status(500).json({ message: e?.meta?.cause || 'Internal Server Error' })
  }
})

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const updatedContact: ContactUs = req.body
    if (!updatedContact.confId) {
      res.status(400).json({ message: 'Conference ID is required' })
    }
    const contact = await contactUsController.updateContact(id, updatedContact)
    res.status(200).json(contact)
  } catch (e: any) {
    res.status(e.staus || 500).json({ message:  e?.meta?.cause || 'Internal Server Error' })
  }
})

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await contactUsController.deleteContact(id)
    res.status(200).json({ message: 'Contact deleted successfully' })
  } catch (e: any) {
    res.status(500).json({ message: e?.meta?.cause || 'Internal Server Error' })
  }
})

export default router
