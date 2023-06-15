import Home from "../models/home";
import prisma from "../config/client";
import HttpException from "../models/http-exception";

export default class HomeController {
    async addHome(home: Home) {
        try {
            await prisma.home.create({ data: home });
        } catch (e: any) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }

    async getHomeByConfId(id: string) {
        if (!id) {
            throw new HttpException(400, "Invalid Id");
        }

        try {
            return await prisma.home.findFirst({ where: { confId: id } });
        } catch (e: any) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }

    async getHomeById(id: string) {
        if (!id) {
            throw new HttpException(400, "Invalid Id");
        }

        try {
            return await prisma.home.findFirst({ where: { id: id } });
        } catch (e: any) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }

    async getHome() {
        try {
            return await prisma.home.findMany();
        } catch (e: any) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }

    async updateHome(home: Home, id: string) {
        if (!id) {
            throw new HttpException(400, "Invalid Id");
        }
        
        try {
            await prisma.home.update({ where: { id: id }, data: home });
        } catch (e: any) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }

    async deleteHome(id: string) {
        if (!id) {
            throw new HttpException(400, "Invalid Id");
        }

        try {
            await prisma.home.delete({ where: { id: id } });
        } catch (e: any) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }
}
