import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { categorySchema } from '../schemas/categorySchema';

export const validateCategory = (req: Request, res: Response, next: NextFunction) => {
  try {
    categorySchema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    next(error);
  }
};
