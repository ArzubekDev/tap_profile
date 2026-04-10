import z from "zod";

export const ZprofileNumber = z.object({
      number: z
    .string()
    .min(1, 'Напишите номер!')
    .regex(/^\+?[0-9]{10,15}$/, 'Неверный формат!'),
})