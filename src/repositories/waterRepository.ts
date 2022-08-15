import { Water } from "@prisma/client";
import client from "../config/database.js";

export type WaterInsertData = Omit<Water, "id" | "createdAt">;
export type WaterSchema = Omit<WaterInsertData, "userId">;
export type WaterDeleteData = Omit<Water, "milliliters" | "createdAt">;

async function insert(waterData: WaterInsertData) {
  await client.water.create({
    data: { ...waterData },
  });
}

async function getByUserId(userId: number) {
  const foundWater = client.water.findMany({
    where: {
      userId,
    },
  });
  return foundWater;
}

async function deleteItem(waterData: WaterDeleteData) {
  await client.water.deleteMany({
    where: {
      id: waterData.id,
      AND: {
        userId: waterData.userId,
      },
    },
  });
}

async function getById(id: number) {
  const foundWater = client.water.findFirst({
    where: {
      id,
    },
  });

  return foundWater;
}

const waterRepository = {
  insert,
  getByUserId,
  deleteItem,
  getById,
};

export default waterRepository;
