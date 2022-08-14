import { Goal } from "@prisma/client";
import client from "../config/database.js";

export type caloriesGoalInsertData = Omit<Goal, "id" | "waterGoal">;
export type waterGoalInsertData = Omit<Goal, "id" | "caloriesGoal">;

async function upsertCaloriesGoal(goalData: caloriesGoalInsertData) {
  await client.goal.upsert({
    where: {
      userId: goalData.userId,
    },
    update: {
      caloriesGoal: goalData.caloriesGoal,
    },
    create: { ...goalData },
  });
}

async function upsertWaterGoal(goalData: waterGoalInsertData) {
  await client.goal.upsert({
    where: {
      userId: goalData.userId,
    },
    update: {
      waterGoal: goalData.waterGoal,
    },
    create: { ...goalData },
  });
}

const goalRepository = {
  upsertCaloriesGoal,
  upsertWaterGoal,
};

export default goalRepository;
