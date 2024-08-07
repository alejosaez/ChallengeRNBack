import { Request, Response } from 'express';
import User from '../models/user';
import { userSchema } from '../schemas/userSchemas';
import { ZodError } from 'zod';

export const createUser = async (req: Request, res: Response) => {
    try {
        const parsedData = userSchema.parse(req.body);
        const user = await User.create(parsedData);
        res.status(201).json(user);
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({ errors: error.errors });
        }
        res.status(500).json({ error: 'Internal server error' });
    }
};
