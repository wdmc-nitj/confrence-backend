import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import awardsModel from '../models/awards';

const prisma = new PrismaClient();


export default class AwardsController {
    // GET /awards/conference/:id
    async getAwardsByConferenceId(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const awards = await prisma.awards.findMany({
                where: { ConfId: id },
            });
            res.json(awards);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // GET /awards
    async getAllAwards(req: Request, res: Response) {
        try {
            const awards = await prisma.awards.findMany();
            res.json(awards);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // GET /awards/:id
    async getAwardById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const award = await prisma.awards.findUnique({ where: { id } });
            if (award) {
                res.json(award);
            } else {
                res.status(404).json({ error: 'Award not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // POST /awards
    async createAward(req: Request, res: Response) {
        const newAward: awardsModel = req.body;
        try {
            const createdAward = await prisma.awards.create({ data: newAward });
            res.json(createdAward);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // PUT /awards/:id
    async updateAward(req: Request, res: Response) {
        const { id } = req.params;
        const updatedAward: awardsModel = req.body;
        try {
            const award = await prisma.awards.findUnique({ where: { id } });
            if (award) {
                const updated = await prisma.awards.update({
                    where: { id },
                    data: updatedAward,
                });
                res.json(updated);
            } else {
                res.status(404).json({ error: 'Award not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // DELETE /awards/:id
    async deleteAward(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const award = await prisma.awards.findUnique({ where: { id } });
            if (award) {
                const deleted = await prisma.awards.delete({ where: { id } });
                res.json(deleted);
            } else {
                res.status(404).json({ error: 'Award not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}