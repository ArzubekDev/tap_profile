'use server'

import { revalidatePath } from "next/cache"

export async function updateNumber(formData:FormData) {
    const number = formData.get('number') as string

    revalidatePath('/accounts/profile')
}