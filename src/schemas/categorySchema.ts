import { z } from "zod";

export const categorySchema = z.object({
    name: z.string().nonempty('Name is required').max(255, 'Name is too long'),
  });