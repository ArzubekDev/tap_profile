import z from "zod";

export const ZhistoryForm = z.object({
  name: z.string().min(1, 'Напишите Имя!').max(150),
  status: z.string().default('all'),
});