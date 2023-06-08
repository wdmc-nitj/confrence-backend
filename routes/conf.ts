import express from 'express';
import { Request, Response } from 'express';
import conf from '../models/conf';
import { addConf, getConf, getConfById, updateConf, deleteConf } from '../crud/conf';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try{
        const resp=await getConf();
        res.status(200).json(resp);
    }
    catch(e: any){
        console.log(e);
        res.status(500).json(e?.message || "Internal Server Error");
    }    
});

router.get('/:id', async (req: Request, res: Response) => {
    try{
        const id:string=req.params.id;
        const resp=await getConfById(id);
        res.status(200).json(resp);
    }
    catch(e: any){
        console.log(e);
        res.status(500).json(e?.message || "Internal Server Error");
    }    
});

router.post('/', async (req: Request, res: Response) => {
    try{
        const conf:conf=req.body;
        await addConf(conf);
        res.status(200).json({"response":"Added Successfully"});
    }
    catch(e: any){
        console.log(e);
        res.status(500).json(e?.message || "Internal Server Error");
    }
});


router.put('/', async (req: Request, res: Response) => {
    try{
        const conf:conf=req.body;
        await updateConf(conf);
        res.status(200).json({"response":"Updated Successfully"});
    }
    catch(e: any){
        console.log(e);
        res.status(500).json(e?.message || "Internal Server Error");
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try{
        const id:string=req.params.id;
        await deleteConf(id);
        res.status(200).json({"response":"Deleted Successfully"});
    }
    catch(e: any){
        console.log(e);
        res.status(500).json(e?.message || "Internal Server Error");
    }
});

export default router;