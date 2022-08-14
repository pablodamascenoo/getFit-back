import goalRepository, {
  caloriesGoalInsertData,
  waterGoalInsertData,
} from "../repositories/goalRepository.js";

async function updateCaloriesGoal(goalData: caloriesGoalInsertData) {
  await goalRepository.upsertCaloriesGoal({
    userId: goalData.userId,
    caloriesGoal: goalData.caloriesGoal,
  });
}

async function updateWaterGoal(goalData: waterGoalInsertData) {
  await goalRepository.upsertWaterGoal({
    userId: goalData.userId,
    waterGoal: goalData.waterGoal,
  });
}

const goalService = {
  updateCaloriesGoal,
  updateWaterGoal,
};

export default goalService;
