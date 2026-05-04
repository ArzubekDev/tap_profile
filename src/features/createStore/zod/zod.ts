import { FORM_REQUIRED_TEXT } from "@/src/shared/ui/form/consts";
import z from "zod";

export const ZcreateStore = z.object({
    storeName: z.string().min(1, FORM_REQUIRED_TEXT).max(150),
    phone: z.string().min(1, FORM_REQUIRED_TEXT).max(150),
    whatsapp: z.string().min(1, FORM_REQUIRED_TEXT),
    instagram: z.string().min(1, FORM_REQUIRED_TEXT),
    address: z.string().min(1, FORM_REQUIRED_TEXT),
    isEveryday: z.boolean(),
    workingHours: z.tuple([z.any(), z.any()]),
    logo: z.any().optional(),
})

export type TFormValues = z.infer<typeof ZcreateStore>;