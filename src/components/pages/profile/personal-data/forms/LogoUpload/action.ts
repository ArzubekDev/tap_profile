'use server'

import { revalidatePath } from "next/cache";

export async function createStoreAction(formData: FormData) {
  // Файлды алуу
  const file = formData.get('logo') as File;
  
  // Башка тексттик маалыматтарды алуу
  const storeName = formData.get('storeName') as string;

  if (file && file.size > 0) {
    // Бул жерде файлды буферге айлантып, S3 же Cloudinary'ге жүктөсөңүз болот
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    console.log("Файл алынды:", file.name);
  }

  // Маалыматтарды базага сактоо...
  
  revalidatePath('/shop/create');
  return { success: true };
}