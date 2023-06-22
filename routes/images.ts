import express from 'express'
import { Request, Response } from 'express'
import Image from '../models/images'
import ImagesController from '../crud/images'

const router = express.Router()
const imagesController = new ImagesController()

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const images = await imagesController.getImagesByConfId(req.params.id)
    res.status(200).json(images)
  } catch (e: any) {
    console.error('Error images items:', e)
    res
      .status(e?.code || 500)
      .json({ error: e?.meta?.cause || 'Internal server error' })
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const image: Image = req.body
    await imagesController.addImage(image)
    res.status(201).json({ response: 'Image Added Successfully' })
  } catch (e: any) {
    console.error('Error images items:', e)
    res
      .status(e?.code || 500)
      .json({ error: e?.meta?.cause || 'Internal server error' })
  }
})

router.put('/:imgID', async (req: Request, res: Response) => {
  try {
    const image: Image = req.body
    const id = req.params.imgID
    console.log(image)
    await imagesController.updateImage(id, image)
    res.status(200).json({ response: 'Image Updated Successfully' })
  } catch (e: any) {
    console.error('Error images items:', e)
    res
      .status(e?.code || 500)
      .json({ error: e?.meta?.cause || 'Internal server error' })
  }
})

router.delete('/:imgID', async (req: Request, res: Response) => {
  try {
    await imagesController.deleteImage(req.params.imgID)
    res.status(200).json({ response: 'Image Deleted Successfully' })
  } catch (e: any) {
    console.error('Error images items:', e)
    res
      .status(e?.code || 500)
      .json({ error: e?.meta?.cause || 'Internal server error' })
  }
})

export default router
