import conf from "../models/conf";
import prisma from "../config/client";
import HttpException from "../models/http-exception";

export const addConf=async (conf:conf)=>{

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

export const getConfById=async (id:string)=>{
    if(!id){
        throw new HttpException(400,"Invalid Id");
    }

    try{
        return await prisma.confrence.findUnique({where:{id:id}});
    }
    catch(e: any){
        throw new HttpException(500,e?.message || "Internal Server Error");
    }
}

export const getConf=async ()=>{

    try{
        return await prisma.confrence.findMany();
    }
    catch(e: any){
        throw new HttpException(500,e?.message || "Internal Server Error");
    }
}

export const updateConf=async (conf:conf)=>{
    if(!conf.email || !conf.email.includes("@")){
        throw new HttpException(400,"Invalid Email");
    }

    try{
        await prisma.confrence.update({where:{email:conf.email},data:conf});
    }
    catch(e: any){
        throw new HttpException(500,e?.message || "Internal Server Error");
    }
}

export const deleteConf=async (id:string)=>{
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