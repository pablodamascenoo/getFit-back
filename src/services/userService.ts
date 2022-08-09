import userRepository, {
  UserSchemaInfo,
} from "../repositories/userRepository.js";

async function updateUserInfo(userId: number, userData: UserSchemaInfo) {
  await userRepository.update(userId, userData);
}

const userService = {
  updateUserInfo,
};

export default userService;
