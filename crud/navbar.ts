import Navbar from "../models/navbar";
import prisma from "../config/client";
import HttpException from "../models/http-exception";

export default class NavbarController {
  async addNavbar(navbar: Navbar) {
    try {
      await prisma.navbar.create({ data: navbar });
    } catch (e: any) {
      throw new HttpException(500, e?.message || "Internal Server Error");
    }
  }

  async getNavbarById(id: string) {
    if (!id) {
      throw new HttpException(400, "Invalid Id");
    }

    try {
      return await prisma.navbar.findFirst({ where: { id: id } });
    } catch (e: any) {
      throw new HttpException(500, e?.message || "Internal Server Error");
    }
  }

  async getNavbarByConfId(id: string) {
    if (!id) {
      throw new HttpException(400, "Invalid Id");
    }

    try {
      return await prisma.navbar.findFirst({ where: { confId: id } });
    } catch (e: any) {
      throw new HttpException(500, e?.message || "Internal Server Error");
    }
  }

  async getNavbar() {
    try {
      return await prisma.navbar.findMany();
    } catch (e: any) {
      throw new HttpException(500, e?.message || "Internal Server Error");
    }
  }

  async updateNavbar(navbar: Navbar, id: string) {
    if (!id) {
      throw new HttpException(400, "Invalid Id");
    }
    
    try {
      await prisma.navbar.update({ where: { id: id }, data: navbar });
    } catch (e: any) {
      throw new HttpException(500, e?.message || "Internal Server Error");
    }
  }

  async deleteNavbar(id: string) {
    if (!id) {
      throw new HttpException(400, "Invalid Id");
    }

    try {
      await prisma.navbar.delete({ where: { id: id } });
    } catch (e: any) {
      throw new HttpException(500, e?.message || "Internal Server Error");
    }
  }
}
