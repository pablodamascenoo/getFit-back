import userRepository, {
  UserSchemaInfo,
} from "../repositories/userRepository.js";
import goalRepository from "../repositories/goalRepository.js";

async function updateUserInfo(userId: number, userData: UserSchemaInfo) {
  const activity = {
    sedentary: 1.2,
    low: 1.375,
    moderate: 1.55,
    high: 1.725,
  };

  const objective = {
    cut: 0.85,
    maintain: 1,
    bulk: 1.15,
  };

  let TMB: number;

  if (userData.gender === "male") {
    TMB =
      activity[userData.activity] *
      (66 +
        (13.7 * userData.weight + 5 * userData.height - 6.8 * userData.age));
  } else if (userData.gender === "female") {
    TMB =
      activity[userData.activity] *
      (655 +
        (9.6 * userData.weight + 1.8 * userData.height - 4.7 * userData.age));
  }

  TMB = Math.round(TMB);
  const caloriesGoal = Math.round(TMB * objective[userData.objective]);

  await goalRepository.insert({ userId, caloriesGoal });
  await userRepository.update(userId, userData);
}

const userService = {
  updateUserInfo,
};

export default userService;
