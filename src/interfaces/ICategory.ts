import { z } from 'zod';

const CategoryZodSchema = z.object({
  name: z.string(),
  description: z.string(),
  stamps: z.array(z.string())
})

export type ICategory = z.infer<typeof CategoryZodSchema>;

export { CategoryZodSchema };
