import waterRepository, {
  WaterDeleteData,
  WaterInsertData,
} from "../repositories/waterRepository.js";

async function createWater(waterData: WaterInsertData) {
  await waterRepository.insert(waterData);
}

async function deleteWater(waterData: WaterDeleteData) {
  const foundWater = await waterRepository.getById(waterData.id);

  if (!foundWater) throw { status: 404, message: "water not found" };
  if (foundWater.userId !== waterData.userId)
    throw { status: 401, message: "this isn't your water " };

  await waterRepository.deleteItem(waterData);
}

const waterService = {
  createWater,
  deleteWater,
};

export default waterService;
