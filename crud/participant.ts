import participant from "../models/participant";
import prisma from "../config/client";
import HttpException from "../models/http-exception";

export const addParticipant = async (participant:participant) => {
  try {
    return await prisma.participant.create({ data: participant });
  } 
  catch (e) {
    throw new HttpException(500, e?.message || "Internal Server Error");
  }
};

export const getParticipantById = async (id:string) => {
  if (!id) {
    throw new HttpException(400, "Invalid Id");
  }

  try {
    return await prisma.participant.findFirst({ where: { id: id } });
  } 
  catch (e) {
    throw new HttpException(500, e?.message || "Internal Server Error");
  }
};

export const getParticipant = async () => {
  try {
    return await prisma.participant.findMany();
  } 
  catch (e) {
    throw new HttpException(500, e?.message || "Internal Server Error");
  }
};

export const updateParticipant = async (participant:participant, id:string) => {
  try {
    await prisma.participant.update({
      where: { id: id },
      data: participant,
    });
  } catch (e) {
    throw new HttpException(500, e?.message || "Internal Server Error");
  }
};

export const deleteParticipant = async (id:string) => {
  if (!id) {
    throw new HttpException(400, "Invalid Id");
  }

  try {
    await prisma.participant.delete({ where: { id: id } });
  } 
  catch (e) {
    throw new HttpException(500, e?.message || "Internal Server Error");
  }
};
