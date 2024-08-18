import { Request, Response, NextFunction } from "express";
import { createCategory, getAllCategory } from "../service/categoryService";

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
