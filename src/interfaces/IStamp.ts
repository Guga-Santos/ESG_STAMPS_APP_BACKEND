import { z } from 'zod';

const StampZodSchema = z.object({
  name: z.string(),
  description: z.string(),
  url: z.string().url(),
  logo: z.string().url(),
})

export type IStamp = z.infer<typeof StampZodSchema>;

export { StampZodSchema };
