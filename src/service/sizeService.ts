import Size from "../models/size";

export const createSizes = async (name: string, additional_price: number) => {
  try {
    const newSize = await Size.create({ name, additional_price });
    return newSize;
  } catch (error) {
    throw new Error('Error creating Size');
  }
};

export const getAllSizes = async () => {
  try {
    const allSizes = await Size.findAll();
    return allSizes;
  } catch (error) {
    throw new Error('Error fetching Sizes');
  }
};
