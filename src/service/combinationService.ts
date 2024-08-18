import Combination from '../models/combination';

export const createCombination = async (name: string, additional_price: number,) => {
  try {
    const newCombination = await Combination.create({ name, additional_price});
    return newCombination;
  } catch (error) {
    throw new Error('Error creating combination');
  }
};

export const getAllCombinations = async () => {
  try {
    const combinations = await Combination.findAll();
    return combinations;
  } catch (error) {
    throw new Error('Error fetching combinations');
  }
};
