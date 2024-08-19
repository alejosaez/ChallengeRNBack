import Category from '../models/category';
import Combination from '../models/combination';
import Product from '../models/product';
import Size from '../models/size';
import { ProductAttributes } from '../types/productType';

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

export async function getProductsByCategory(categoryId: string) {
  const category = await Category.findByPk(categoryId, {
    include: [
      {
        model: Product,
        include: [
          {
            model: Size,
            through: { attributes: [] }, 
            attributes: ['size_id', 'name', 'additional_price']
          },
          {
            model: Combination,
            through: { attributes: [] },
            attributes: ['combination_id', 'name', 'additional_price']
          }
        ]
      }
    ]
  });

  const products = category?.get('Products') as ProductAttributes[] | undefined;

  return products || null;
}