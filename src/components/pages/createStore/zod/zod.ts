import z from "zod";

export const ZcreateStore = z.object({
    storeName: z.string().min(1, "*Напишите название магазина*").max(150),
    phone: z.string().min(1, "*Напишите номер телефона*").max(150),
    whatsapp: z.string().min(1, "*Напишите Ватсап номер*"),
    instagram: z.string().min(1, "*Напишите свой инстаграм*"),
    address: z.string().min(1, "*Укажите адрес*"),
    isEveryday: z.boolean(),
    workingHours: z.tuple([z.any(), z.any()]),
})

export type TFormValues = z.infer<typeof ZcreateStore>;