import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  unit_price: z.number().positive("Price must be a positive number"),
  description: z.string().min(1, "Description is required"),
  image_url: z.string().url().optional(),
  category_id: z.string().uuid("Invalid Category ID"),
  sizes: z.array(z.string().uuid("Invalid Size ID")).min(1, "At least one size is required"),
  combinations: z.array(z.string().uuid("Invalid Combination ID")).min(1, "At least one combination is required"),
});

export const updateProductSchema = productSchema.partial();
