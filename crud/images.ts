import Image from '../models/images'
import prisma from '../config/client'
import HttpException from '../models/http-exception'

export async function createImage(image: Image): Promise<Image> {
  try {
    const newImage: any = await prisma.images.create({ data: image })
    return newImage
  } catch (error) {
    throw new HttpException(500, 'Internal server error')
  }
}

// Retrieve all images
export async function getAllImages(): Promise<Image[]> {
  try {
    const image: any = await prisma.images.findMany()

    return image
  } catch (error) {
    throw new HttpException(500, 'Internal server error')
  }
}

// Retrieve a single image by ID
export async function getImageById(id: string): Promise<Image | null> {
  try {
    const image: any = await prisma.images.findUnique({ where: { id } })
    if (!image) {
      throw new HttpException(404, 'Image not found')
    }
    return image
  } catch (error) {
    if (error instanceof HttpException) {
      throw error
    } else {
      throw new HttpException(500, 'Internal server error')
    }
  }
}

// Update an image by ID
export async function updateImageById(
  id: string,
  update: Partial<Image>
): Promise<Image | null> {
  try {
    const image: any = await prisma.images.update({
      where: { id },
      data: update,
    })
    if (!image) {
      throw new HttpException(404, 'Image not found')
    }
    return image
  } catch (error) {
    if (error instanceof HttpException) {
      throw error
    } else {
      throw new HttpException(500, 'Internal server error')
    }
  }
}

// Delete an image by ID
export async function deleteImageById(id: string): Promise<boolean> {
  try {
    const result = await prisma.images.delete({ where: { id } })
    if (!result) {
      throw new HttpException(404, 'Image not found')
    }
    return true
  } catch (error) {
    if (error instanceof HttpException) {
      throw error
    } else {
      throw new HttpException(500, 'Internal server error')
    }
  }
}
