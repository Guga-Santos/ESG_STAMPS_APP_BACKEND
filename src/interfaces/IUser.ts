import { z } from 'zod';

const UserZodSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.string(),
});

export type IUser = z.infer<typeof UserZodSchema>;

export { UserZodSchema };
