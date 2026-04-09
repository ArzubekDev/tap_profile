import * as z from 'zod';

export const ZprofileNameSurName = z.object({
  name: z.string().min(1, 'Напишите Имя!').max(150),
  surname: z.string().min(1, 'Напишите Фамилию!').max(150),
});

export const ZprofileNumber = z.object({
      number: z
    .string()
    .min(1, 'Напишите номер!')
    .regex(/^\+?[0-9]{10,15}$/, 'Неверный формат!'),
})