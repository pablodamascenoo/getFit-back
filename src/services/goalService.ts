import goalRepository, {
  caloriesGoalInsertData,
  waterGoalInsertData,
} from "../repositories/goalRepository.js";

async function updateCaloriesGoal(goalData: caloriesGoalInsertData) {
  await goalRepository.updateCaloriesGoal(
    goalData.userId,
    goalData.caloriesGoal
  );
}

async function updateWaterGoal(goalData: waterGoalInsertData) {
  await goalRepository.updateWaterGoal(goalData.userId, goalData.waterGoal);
}

const goalService = {
  updateCaloriesGoal,
  updateWaterGoal,
};

export default goalService;
