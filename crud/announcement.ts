import express from "express";
import { Request, Response } from "express";
import Announcement  from "../models/announcement";
import prisma from "../config/client";
import HttpException from "../models/http-exception";

export const addAnnouncement = async (announcement: Announcement) => {
  try {
    await prisma.announcement.create({ data: announcement });
  } catch (e: any) {
    throw new HttpException(500, e?.message || "Internal Server Error");
  }
};

export const getAnnouncementById = async (id: string) => {
    if(!id){
        throw new HttpException(400,"Invalid Id");
    }
  try {
    return await prisma.announcement.findUnique({ where: { id: id } });
  } catch (e: any) {
    throw new HttpException(500, e?.message || "Internal Server Error");
  }
};

export const getAllAnnouncements = async () => {
  try {
    return await prisma.announcement.findMany();
  } catch (e: any) {
    throw new HttpException(500, e?.message || "Internal Server Error");
  }
};

export const updateAnnouncement = async (id: string, announcement: Announcement) => {
    if(!id){
        throw new HttpException(400,"Invalid Id");
    }
  try {
    await prisma.announcement.update({ where: { id: id }, data: announcement });
  } catch (e: any) {
    throw new HttpException(500, e?.message || "Internal Server Error");
  }
};

export const deleteAnnouncement = async (id: string) => {
    if(!id){
        throw new HttpException(400,"Invalid Id");
    }
  try {
    await prisma.announcement.delete({ where: { id: id } });
  } catch (e: any) {
    throw new HttpException(500, e?.message || "Internal Server Error");
  }
};
