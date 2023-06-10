import Navbar from "../models/navbar";
import prisma from "../config/client";
import HttpException from "../models/http-exception";

export const addNavbar = async (navbar: Navbar) => {
  try {
    await prisma.navbar.create({ data: navbar });
  } catch (e: any) {
    throw new HttpException(500, e?.message || "Internal Server Error");
  }
};

export const getNavbarById = async (id: string) => {
  if (!id) {
    throw new HttpException(400, "Invalid Id");
  }

  try {
    return await prisma.navbar.findFirst({ where: { id: id } });
  } catch (e: any) {
    throw new HttpException(500, e?.message || "Internal Server Error");
  }
};

export const getNavbar = async () => {
  try {
    return await prisma.navbar.findMany();
  } catch (e: any) {
    throw new HttpException(500, e?.message || "Internal Server Error");
  }
};

export const updateNavbar = async (navbar: Navbar, id: string) => {
  try {
    await prisma.navbar.update({ where: { id: id }, data: navbar });
  } catch (e: any) {
    throw new HttpException(500, e?.message || "Internal Server Error");
  }
};

export const deleteNavbar = async (id: string) => {
  if (!id) {
    throw new HttpException(400, "Invalid Id");
  }

  try {
    await prisma.navbar.delete({ where: { id: id } });
  } catch (e: any) {
    throw new HttpException(500, e?.message || "Internal Server Error");
  }
};
