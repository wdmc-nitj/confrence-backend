import conf from "../models/conf";
import prisma from "../config/client";
import HttpException from "../models/http-exception";

export default class ConfController {

     async addConf (conf:conf){

        if(!conf.email || !conf.email.includes("@")){
            throw new HttpException(400,"Invalid Email");
        }
    
        try{
            await prisma.confrence.create({data:conf});
        }
        catch(e: any){
            throw new HttpException(500,e?.message || "Internal Server Error");
        }
    }

    
     async getConfById(id:string){
        if(!id){
            throw new HttpException(400,"Invalid Id");
        }
    
        try{
            return await prisma.confrence.findFirst({where:{id:id}});
        }
        catch(e: any){
            throw new HttpException(500,e?.message || "Internal Server Error");
        }
    }
    
    async getConf(){
    
        try{
            return await prisma.confrence.findMany();
        }
        catch(e: any){
            throw new HttpException(500,e?.message || "Internal Server Error");
        }
    }
    
    async updateConf(conf:conf,id:string){
        if(!conf.email || !conf.email.includes("@")){
            throw new HttpException(400,"Invalid Email");
        }
    
        try{
            await prisma.confrence.update({where:{id:id},data:conf});
        }
        catch(e: any){
            throw new HttpException(500,e?.message || "Internal Server Error");
        }
    }
    
     async deleteConf(id:string){
        if(!id){
            throw new HttpException(400,"Invalid Id");
        }
        
        try{
            await prisma.confrence.delete({where:{id:id}});
        }
        catch(e: any){
            throw new HttpException(500,e?.message || "Internal Server Error");
        }
    }

}