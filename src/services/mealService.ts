import mealRepository, {
  MealDeleteData,
  MealInsertData,
} from "../repositories/mealRepository.js";

async function createMeal(mealData: MealInsertData) {
  await mealRepository.insert(mealData);
}

async function deleteMeal(mealData: MealDeleteData) {
  const foundMeal = await mealRepository.getById(mealData.id);

  if (!foundMeal) throw { status: 404, message: "meal not found" };
  if (foundMeal.userId !== mealData.userId)
    throw { status: 401, message: "this isn't your meal " };

  await mealRepository.deleteItem(mealData);
}

const mealService = {
  createMeal,
  deleteMeal,
};

export default mealService;
