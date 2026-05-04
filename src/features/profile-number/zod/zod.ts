import { FORM_INVALID_PARAMETERS_TEXT, FORM_REQUIRED_TEXT } from "@/src/shared/ui/form/consts";
import z from "zod";

export const ZprofileNumber = z.object({
      number: z
    .string()
    .min(1, FORM_REQUIRED_TEXT)
    .regex(/^\+?[0-9]{10,15}$/, FORM_INVALID_PARAMETERS_TEXT),
})