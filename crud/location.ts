import prisma from '../config/client'
import HttpException from '../models/http-exception'
import Location from '../models/location'

export default class LocationController {
  async getLocation(confId: string) {
    try {
      return await prisma.location.findFirst({ where: { confId } })
    } catch (e: any) {
      throw new HttpException(500, e?.meta?.cause || 'Internal Server Error')
    }
  }

  async addLocation(data: Location) {
    try {
      return prisma.location.create({ data })
    } catch (e: any) {
      throw new HttpException(500, e?.meta?.cause || 'Internal Server Error')
    }
  }

  async updateLocation(id: string, data: Location) {
    try {
      return prisma.location.update({ where: { id }, data })
    } catch (e: any) {
      throw new HttpException(500, e?.meta?.cause || 'Internal Server Error')
    }
  }

  async deleteLocation(id: string) {
    try {
      return prisma.location.delete({ where: { id } })
    } catch (e: any) {
      throw new HttpException(500, e?.meta?.cause || 'Internal Server Error')
    }
  }
}
