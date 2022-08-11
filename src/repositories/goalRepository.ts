import { Goal } from "@prisma/client";
import client from "../config/database.js";

export type caloriesGoalInsertData = Omit<Goal, "id" | "waterGoal">;
export type waterGoalInsertData = Omit<Goal, "id" | "caloriesGoal">;

async function insert(goalData: caloriesGoalInsertData) {
  await client.goal.create({
    data: { ...goalData },
  });
}

async function updateCaloriesGoal(userId: number, caloriesGoal: number) {
  await client.goal.update({
    where: {
      userId,
    },
    data: {
      caloriesGoal,
    },
  });
}

async function updateWaterGoal(userId: number, waterGoal: number) {
  await client.goal.update({
    where: {
      userId,
    },
    data: {
      waterGoal,
    },
  });
}

const goalRepository = {
  insert,
  updateCaloriesGoal,
  updateWaterGoal,
};

export default goalRepository;
