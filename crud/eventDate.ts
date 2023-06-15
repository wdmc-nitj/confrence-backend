import { Request, Response } from 'express';
import EventDates from '../models/eventDate';
import prisma from '../config/client';
import HttpException from '../models/http-exception';

export default class EventDateController {
    // GET /eventDates/conference/:id
    async getEventDatesByConferenceId(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const eventDates = await prisma.eventDates.findMany({
                where: { confId: id },
            });
            res.json(eventDates);
        } catch (error: any) {
            throw new HttpException(
                500,
                error?.message || 'Internal server error',
            );
        }
    }

    // GET /eventDates
    async getAllEventDates(req: Request, res: Response) {
        try {
            const eventDates = await prisma.eventDates.findMany();
            res.json(eventDates);
        } catch (error: any) {
            throw new HttpException(
                500,
                error?.message || 'Internal server error',
            );
        }
    }

    // GET /eventDates/:id
    async getEventDateById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const eventDate = await prisma.eventDates.findUnique({
                where: { id },
            });
            if (eventDate) {
                res.json(eventDate);
            } else {
                res.status(404).json({ error: 'EventDate not found' });
            }
        } catch (error: any) {
            throw new HttpException(
                500,
                error?.message || 'Internal server error',
            );
        }
    }

    // POST /eventDates
    async createEventDate(req: Request, res: Response) {
        const newEventDate: EventDates = req.body;
        try {
            const createdEventDate = await prisma.eventDates.create({
                data: newEventDate,
            });
            res.json(createdEventDate);
        } catch (error: any) {
            throw new HttpException(
                500,
                error?.message || 'Internal server error',
            );
        }
    }

    // PUT /eventDates/:id
    async updateEventDate(req: Request, res: Response) {
        const { id } = req.params;
        const updatedEventDate: EventDates = req.body;
        try {
            const eventDate = await prisma.eventDates.findUnique({
                where: { id },
            });
            if (eventDate) {
                await prisma.eventDates.update({
                    where: { id },
                    data: updatedEventDate,
                });
                res.json(updatedEventDate);
            } else {
                res.status(404).json({ error: 'EventDate not found' });
            }
        } catch (error: any) {
            throw new HttpException(
                500,
                error?.message || 'Internal server error',
            );
        }
    }

    // DELETE /eventDates/:id
    async deleteEventDate(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const eventDate = await prisma.eventDates.findUnique({
                where: { id },
            });
            if (eventDate) {
                await prisma.eventDates.delete({ where: { id } });
                res.json({ message: 'EventDate deleted successfully' });
            } else {
                res.status(404).json({ error: 'EventDate not found' });
            }
        } catch (error: any) {
            throw new HttpException(
                500,
                error?.message || 'Internal server error',
            );
        }
    }
}
