import waterRepository, {
  WaterInsertData,
} from "../repositories/waterRepository.js";

async function createWater(waterData: WaterInsertData) {
  await waterRepository.insert(waterData);
}

const waterService = {
  createWater,
};

export default waterService;
