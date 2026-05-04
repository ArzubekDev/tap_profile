'use server';

import { db } from '@/src/shared/lib/auth';
import { auth } from '@/src/shared/lib/db';
import { revalidatePath } from 'next/cache';
import { ZprofileNumber } from '../zod/zod';

export async function updateNumber(formData: FormData) {
  const session = await auth();

  if (!session?.user) {
    return { error: 'Не авторизован!' };
  }

  const number = formData.get('number') as string;

  const validation = ZprofileNumber.safeParse({ number });
  if (!validation.success) {
    return { error: 'Неправильный номер!' };
  }

  try {
    await db.user.update({
      where: { id: session.user.id },
      data: { phoneNumber: validation.data.number },
    });

    revalidatePath('/accounts/profile');
    return { success: true };
  } catch (e) {
    return { error: 'Ощибка на сервере!' };
  }
}
