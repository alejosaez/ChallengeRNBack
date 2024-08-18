import Category from '../models/category';

export const createCategory = async (name: string) => {
  try {
    const newCategory = await Category.create({ name });
    return newCategory;
  } catch (error) {
    throw new Error('Error creating category');
  }
};


export const getAllCategory = async () => {
  try {
    const allCategories = await Category.findAll();
    return allCategories;
  } catch (error) {
    throw new Error('Error creating category');
  }
};
