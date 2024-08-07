import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.number().positive("Price must be a positive number"),
  categoryId: z.number().int("Category ID must be an integer"),
  unitPrice: z.number().positive(),
  description: z.string().min(1),
  imageUrl: z.string().url().optional(),
});

export const updateProductSchema = productSchema.partial();
