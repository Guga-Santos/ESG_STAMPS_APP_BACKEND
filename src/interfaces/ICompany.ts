import { z } from 'zod';

const CompanyZodSchema = z.object({
  name: z.string().min(3),
  description: z.string(),
  url: z.string().url(),
  email: z.string().email(),
  sector: z.string().min(3),
  stamps: z.array(z.string()),
  logo: z.string().url(),
  data: z.string().url(),
})

export type ICompany = z.infer<typeof CompanyZodSchema>;

export { CompanyZodSchema };
