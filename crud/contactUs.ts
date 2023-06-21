import ContactUs from '../models/contactUs'
import prisma from '../config/client'
import HttpException from '../models/http-exception'

export default class ContactUsController {
  async getAllContacts(confId: string) {
    try {
      return await prisma.contact.findMany({ where: { confId } })
    } catch (e: any) {
      throw new HttpException(500, e?.meta?.cause || 'Internal Server Error')
    }
  }
  async addContact(data: ContactUs) {
    try {
      return prisma.contact.create({ data })
    } catch (e: any) {
      throw new HttpException(500, e?.meta?.cause || 'Internal Server Error')
    }
  }
  async updateContact(id: string, data: ContactUs) {
    try {
      if (!id) {
        throw new HttpException(400, 'Contact ID is required')
      }
      return prisma.contact.update({ where: { id }, data })
    } catch (e: any) {
      throw new HttpException(500, e?.meta?.cause || 'Internal Server Error')
    }
  }
  async deleteContact(id: string) {
    try {
      const res = prisma.contact.delete({ where: { id } })
      if (!res) {
        throw new HttpException(404, 'Contact not found')
      }
      return res
    } catch (e: any) {
      console.log(e)
      throw new HttpException(500, e?.meta?.cause || 'Internal Server Error')
    }
  }
}
