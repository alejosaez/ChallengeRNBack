import { Request, Response, NextFunction } from 'express';
import { createCombination, getAllCombinations } from '../service/combinationService';
import { combinationSchema } from '../schemas/combinationSchema';

export const createCombinationController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Validamos la entrada usando Zod
    const { name, additional_price } = combinationSchema.parse(req.body);
    
    // Creamos la combinación
    const combination = await createCombination(name, additional_price);
    return res.status(201).json(combination);
  } catch (error) {
    next(error);
  }
};

export const getAllCombinationsController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const combinations = await getAllCombinations();
    return res.status(200).json(combinations);
  } catch (error) {
    next(error);
  }
};
