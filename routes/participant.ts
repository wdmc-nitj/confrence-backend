import express from 'express';
import { Request, Response } from 'express';
import participant from '../models/participant';
import ParticipantController from '../crud/participant';

const participantController = new ParticipantController(); 
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const resp = await participantController.getParticipant();
        res.status(200).json(resp);
    } 
    catch (e:any) {
        console.error("Error participant items:", e);
        res.status(e?.code || 500).json({ error: e?.message || "Internal server error" });
      }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const resp = await participantController.getParticipantById(id);
        res.status(200).json(resp);
    } 
    catch (e:any) {
        console.error("Error participant items:", e);
        res.status(e?.code || 500).json({ error: e?.message || "Internal server error" });
      }
});

router.get('/conference/:id', async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const resp = await participantController.getParticipantByConfId(id);
        res.status(200).json(resp);
    } 
    catch (e:any) {
        console.error("Error participant items:", e);
        res.status(e?.code || 500).json({ error: e?.message || "Internal server error" });
      }
});

router.post('/', async (req: Request, res: Response) => {
    try {
        const participant: participant = req.body;
        await participantController.addParticipant(participant);
        res.status(200).json({ success: "Participant Added Successfully" });
    } 
    catch (e:any) {
        console.error("Error participant items:", e);
        res.status(e?.code || 500).json({ error: e?.message || "Internal server error" });
      }
});

router.put('/:id', async (req: Request, res: Response) => {
    try {
        const participant: participant = req.body;
        await participantController.updateParticipant(participant, req.params.id);
        res.status(200).json({ success: "Participant Updated Successfully" });
    } 
    catch (e:any) {
        console.error("Error participant items:", e);
        res.status(e?.code || 500).json({ error: e?.message || "Internal server error" });
      }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        await participantController.deleteParticipant(req.params.id);
        res.status(200).json({ success: "Participant Deleted Successfully" });
    } 
    catch (e:any) {
        console.error("Error participant items:", e);
        res.status(e?.code || 500).json({ error: e?.message || "Internal server error" });
      }
});

export default router;



