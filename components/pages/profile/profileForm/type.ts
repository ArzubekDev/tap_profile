// export type TProfileFormValues= {
// name: string;
// surname: string;
// number?: string;
// }

import * as z from 'zod';

// Создаем схему
export const profileSchema = z.object({
  name: z.string().min(1, 'Напишите Имя!').max(150),
  surname: z.string().min(1, 'Напишите Фамилию!').max(150),
  // Если номер может быть пустым, добавьте .optional() или .nullable()
  number: z.string().min(1, 'Напишите номер!').regex(/^\+?[0-9]{10,15}$/, 'Неверный формат'),
});

// Генерируем тип из схемы
export type TProfileFormValues = z.infer<typeof profileSchema>;