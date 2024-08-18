import { z } from 'zod';

export const combinationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  additional_price: z.number().positive("Additional price must be a positive number"),
});
