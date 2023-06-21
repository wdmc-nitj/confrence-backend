import express from 'express'
import { Request, Response } from 'express'
import Location from '../models/location'
import LocationController from '../crud/location'

const router = express.Router()
const locationController = new LocationController()

router.get('/:confId', async (req: Request, res: Response) => {
  try {
    const { confId } = req.params
    if (!confId) {
      res.status(400).json({ message: 'Conference ID is required' })
    }
    const locations = await locationController.getLocation(confId)
    if (!locations) {
      res.status(404).json({ message: 'No locations found' })
    }
    res.status(200).json(locations)
  } catch (e: any) {
    res.status(500).json({ message: e?.meta?.cause || 'Internal Server Error' })
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const newLocation: Location = req.body
    if (!newLocation.confId) {
      res.status(400).json({ message: 'Conference ID is required' })
    }
    const location = await locationController.addLocation(newLocation)
    res.status(201).json(location)
  } catch (e: any) {
    res.status(500).json({ message: e?.meta?.cause || 'Internal Server Error' })
  }
})

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id
    const updatedLocation: Location = req.body
    if (!updatedLocation.confId) {
      res.status(400).json({ message: 'Conference ID is required' })
    }
    const location = await locationController.updateLocation(
      id,
      updatedLocation
    )
    res.status(200).json(location)
  } catch (e: any) {
    res.status(500).json({ message: e?.meta?.cause || 'Internal Server Error' })
  }
})

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id
    await locationController.deleteLocation(id)
    res.status(200).json({ message: 'Location deleted successfully' })
  } catch (e: any) {
    res.status(500).json({ message: e?.meta?.cause || 'Internal Server Error' })
  }
})

export default router
