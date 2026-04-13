'use server'

import { revalidatePath } from 'next/cache'

export async function updateProfile(formData: FormData) {
  const name = formData.get('name') as string;
  const surname = formData.get('surname') as string;

  revalidatePath('/settings');
}