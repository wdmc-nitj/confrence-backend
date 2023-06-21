import Image from '../models/images'
import prisma from '../config/client'
import HttpException from '../models/http-exception'

export default class ImagesController {
  async addImage(image: Image) {
    try {
      await prisma.images.create({ data: image })
    } catch (e: any) {
      throw new HttpException(500, e?.meta?.cause || 'Internal Server Error')
    }
  }
  async getImagesByConfId(id: string) {
    if (!id) {
      throw new HttpException(400, 'Invalid Id')
    }

    try {
      return await prisma.images.findMany({ where: { confId: id } })
    } catch (e: any) {
      throw new HttpException(500, e?.meta?.cause || 'Internal Server Error')
    }
  }
  async updateImage(id: string, image: Image) {
    try {
      await prisma.images.update({ where: { id: id }, data: image })
    } catch (e: any) {
      throw new HttpException(500, e?.meta?.cause || 'Internal Server Error')
    }
  }
  async deleteImage(id: string) {
    if (!id) {
      throw new HttpException(400, 'Invalid Id')
    }

    try {
      await prisma.images.delete({ where: { id } })
    } catch (e: any) {
      throw new HttpException(500, e?.meta?.cause || 'Internal Server Error')
    }
  }
}
