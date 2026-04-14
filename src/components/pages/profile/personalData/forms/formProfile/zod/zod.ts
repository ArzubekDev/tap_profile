import { FORM_REQUIRED_TEXT } from '@/src/components/form/consts';
import * as z from 'zod';

export const ZprofileNameSurName = z.object({
  name: z.string().min(1, FORM_REQUIRED_TEXT).max(150),
  surname: z.string().min(1, FORM_REQUIRED_TEXT).max(150),
});

