import express from 'express';
import { Request, Response } from 'express';
import conf from '../models/conf';
import ConfController  from '../crud/conf';

const router = express.Router();
const confController = new ConfController();

router.get('/', async (req: Request, res: Response) => {
    try{
        const resp=await confController.getConf();
        res.status(200).json(resp);
    }
    catch (e:any) {
        console.error("Error retrieving conf  items:", e);
        res.status(500).json({ error: e?.message || "Internal server error" });
      }  
});

router.get('/:id', async (req: Request, res: Response) => {
    try{
        const id:string=req.params.id;
        const resp=await confController.getConfById(id);
        res.status(200).json(resp);
    }
    catch (e:any) {
        console.error("Error retrieving conf items:", e);
        res.status(500).json({ error: e?.message || "Internal server error" });
      } 
});

router.post('/', async (req: Request, res: Response) => {
    try{
        const conf:conf=req.body;
        await confController.addConf(conf);
        res.status(200).json({success:"Added Successfully"});
    }
    catch (e:any) {
        console.error("Error retrieving navbar items:", e);
        res.status(500).json({ error: e?.message || "Internal server error" });
      }
});


router.put('/', async (req: Request, res: Response) => {
    try{
        const conf:conf=req.body;
        await confController.updateConf(conf);
        res.status(200).json({success:"Updated Successfully"});
    }
    catch (e:any) {
        console.error("Error retrieving navbar items:", e);
        res.status(500).json({ error: e?.message || "Internal server error" });
      }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try{
        const id:string=req.params.id;
        await confController.deleteConf(id);
        res.status(200).json({success:"Deleted Successfully"});
    }
    catch (e:any) {
        console.error("Error retrieving navbar items:", e);
        res.status(500).json({ error: e?.message || "Internal server error" });
      }
});

export default router;