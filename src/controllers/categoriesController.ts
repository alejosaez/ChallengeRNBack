import { Request, Response, NextFunction } from 'express';
import { createCategory } from '../service/categoryService';

export const createCategoryController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;
    const category = await createCategory(name);
    return res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};
