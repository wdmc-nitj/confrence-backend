import { Request, Response } from 'express';
import sponsorsModel from '../models/sponsors';
import prisma from '../config/client';
import HttpException from '../models/http-exception';

export default class SponsorsController {
    // GET /sponsors/conference/:id
    async getSponsorsByConferenceId(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const sponsors = await prisma.sponsors.findMany({
                where: { confId: id },
            });
            res.json(sponsors);
        } catch (error: any) {
            throw new HttpException(
                500,
                error?.message || 'Internal server error',
            );
        }
    }

    // GET /sponsors
    async getAllSponsors(req: Request, res: Response) {
        try {
            const sponsors = await prisma.sponsors.findMany();
            res.json(sponsors);
        } catch (error: any) {
            throw new HttpException(
                500,
                error?.message || 'Internal server error',
            );
        }
    }

    // GET /sponsors/:id
    async getSponsorById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const sponsor = await prisma.sponsors.findUnique({ where: { id } });
            if (sponsor) {
                res.json(sponsor);
            } else {
                res.status(404).json({ error: 'Sponsor not found' });
            }
        } catch (error: any) {
            throw new HttpException(
                500,
                error?.message || 'Internal server error',
            );
        }
    }

    // POST /sponsors
    async createSponsor(req: Request, res: Response) {
        const newSponsor: sponsorsModel = req.body;
        try {
            const createdSponsor = await prisma.sponsors.create({
                data: newSponsor,
            });
            res.json(createdSponsor);
        } catch (error: any) {
            throw new HttpException(
                500,
                error?.message || 'Internal server error',
            );
        }
    }

    // PUT /sponsors/:id
    async updateSponsor(req: Request, res: Response) {
        const { id } = req.params;
        const updatedSponsor: sponsorsModel = req.body;
        try {
            const sponsor = await prisma.sponsors.findUnique({ where: { id } });
            if (sponsor) {
                const updated = await prisma.sponsors.update({
                    where: { id },
                    data: updatedSponsor,
                });
                res.json(updated);
            } else {
                res.status(404).json({ error: 'Sponsor not found' });
            }
        } catch (error: any) {
            throw new HttpException(
                500,
                error?.message || 'Internal server error',
            );
        }
    }

    // DELETE /sponsors/:id
    async deleteSponsor(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const sponsor = await prisma.sponsors.findUnique({ where: { id } });
            if (sponsor) {
                const deleted = await prisma.sponsors.delete({ where: { id } });
                res.json(deleted);
            } else {
                res.status(404).json({ error: 'Sponsor not found' });
            }
        } catch (error: any) {
            throw new HttpException(
                500,
                error?.message || 'Internal server error',
            );
        }
    }
}
