'use server'

import { revalidatePath } from "next/cache";

export async function createStoreAction(formData: FormData) {
  const file = formData.get('logo') as File;
  
  const storeName = formData.get('storeName') as string;

  if (file && file.size > 0) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    console.log("Файл алынды:", file.name);
  }
  
  revalidatePath('/shop/create');
  return { success: true };
}