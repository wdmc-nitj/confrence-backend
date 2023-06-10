import express from 'express';
import { Request, Response } from 'express';
import participant from '../models/participant';
import { addParticipant, getParticipant, getParticipantById, updateParticipant, deleteParticipant } from '../crud/participant';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const resp = await getParticipant();
        res.status(200).json(resp);
    } 
    catch (e: any) {
        console.log(e);
        res.status(500).json(e?.message || "Internal Server Error");
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const resp = await getParticipantById(id);
        res.status(200).json(resp);
    } 
    catch (e: any) {
        console.log(e);
        res.status(500).json(e?.message || "Internal Server Error");
    }
});

router.post('/', async (req: Request, res: Response) => {
    try {
        const participant: participant = req.body;
        await addParticipant(participant);
        res.status(200).json({ "response": "Participant Added Successfully" });
    } 
    catch (e: any) {
        console.log(e);
        res.status(500).json(e?.message || "Internal Server Error");
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    try {
        const participant: participant = req.body;
        await updateParticipant(participant, req.params.id);
        res.status(200).json({ "response": "Participant Updated Successfully" });
    } 
    catch (e: any) {
        console.log(e);
        res.status(500).json(e?.message || "Internal Server Error");
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        await deleteParticipant(req.params.id);
        res.status(200).json({ "response": "Participant Deleted Successfully" });
    } 
    catch (e: any) {
        console.log(e);
        res.status(500).json(e?.message || "Internal Server Error");
    }
});

export default router;
