import { Request, Response, NextFunction } from "express";
import { createCategory, getAllCategory, getProductsByCategory } from "../service/categoryService";

export const createCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name } = req.body;
    const category = await createCategory(name);
    return res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};

export const getAllCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allCategories = await getAllCategory();
    res.status(200).json(allCategories);
  } catch (error) {
    next(error);
  }
};

export const getProductsByCategoryController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categoryId = req.params.id;
    const products = await getProductsByCategory(categoryId);

    if (products) {
      res.status(200).json(products);
    } else {
      res.status(404).json({ error: 'Category not found' });
    }
  } catch (error) {
    next(error);
  }
};