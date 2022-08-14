import { Water } from "@prisma/client";
import client from "../config/database.js";

export type WaterInsertData = Omit<Water, "id" | "createdAt">;
export type WaterSchema = Omit<WaterInsertData, "userId">;

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

const waterRepository = {
  insert,
  getByUserId,
};

export default waterRepository;
