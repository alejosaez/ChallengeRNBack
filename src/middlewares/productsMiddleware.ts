import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { productSchema, updateProductSchema } from '../schemas/productSchema';

export const validateCreateProduct = (req: Request, res: Response, next: NextFunction) => {
    try {
        productSchema.parse(req.body);
        next();
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({ errors: error.errors });
        }
        next(error);
    }
};

export const validateUpdateProduct = (req: Request, res: Response, next: NextFunction) => {
    try {
        updateProductSchema.parse(req.body);
        next();
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({ errors: error.errors });
        }
        next(error);
    }
};
