import { Meal } from "@prisma/client";
import client from "../config/database.js";

export type MealInsertData = Omit<Meal, "id" | "createdAt">;
export type MealSchema = Omit<MealInsertData, "userId">;
export type MealDeleteData = Omit<Meal, "calories" | "name" | "createdAt">;

async function insert(mealData: MealInsertData) {
  await client.meal.create({
    data: { ...mealData },
  });
}

async function deleteItem(mealData: MealDeleteData) {
  await client.meal.deleteMany({
    where: {
      id: mealData.id,
      AND: {
        userId: mealData.userId,
      },
    },
  });
}

async function getByUserId(userId: number) {
  const foundMeal = client.meal.findMany({
    where: {
      userId,
    },
  });
  return foundMeal;
}

async function getById(id: number) {
  const foundMeal = client.meal.findFirst({
    where: {
      id,
    },
  });

  return foundMeal;
}

const mealRepository = {
  insert,
  getByUserId,
  getById,
  deleteItem,
};

export default mealRepository;
