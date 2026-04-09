import z from "zod";

export const ZhistoryForm = z.object({
  name: z.string().min(1, 'Напишите Имя!').max(150),
  status: z.string().default('all'),
  store: z.string().default('all'),
  dateFrom: z.string().nullable().optional(),
  dateTo: z.string().nullable().optional(),
});

export type THistoryForm = z.infer<typeof ZhistoryForm>;