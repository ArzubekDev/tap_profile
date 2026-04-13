'use server'

import { revalidatePath } from "next/cache";

export async function createStoreAction(data: any) {
    const { storeName, address, whatsapp, instagram, latitude, longitude } = data;

    // await db.store.create({ data: { ... } })

    revalidatePath('/shop/create');
    return { success: true };
}