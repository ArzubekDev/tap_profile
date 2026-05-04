'use server';


import { revalidatePath } from 'next/cache';
import { ZprofileNameSurName } from './zod/zod';
import { auth } from '@/src/shared/lib/db';
import { db } from '@/src/shared/lib/auth';

export async function updateProfile(formData: FormData) {
  const session = await auth();

  if (!session?.user) {
    return { error: 'Не авторизован!' };
  }

  const name = formData.get('name') as string;
  const surname = formData.get('surname') as string;

  const validation = ZprofileNameSurName.safeParse({ name, surname });
  if (!validation.success) {
    return { error: 'Неправильные данные!' };
  }

  try {
    await db.user.update({
      where: { id: session.user.id },
      data: { 
        name: validation.data.name, 
        surname: validation.data.surname 
      },
    });

    revalidatePath('/accounts/profile');
    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: 'Ошибка на сервере!' };
  }
}