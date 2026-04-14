import z from "zod";
import { FORM_REQUIRED_TEXT } from "@/src/components/form/consts";

export const ZhistoryForm = z.object({
  name: z.string().min(1, FORM_REQUIRED_TEXT).max(150),
  status: z.string(),
  store: z.string(),
  dateFrom: z.string().nullable().optional(),
  dateTo: z.string().nullable().optional(),
});

export type THistoryForm = z.infer<typeof ZhistoryForm>;