
import dayjs from 'dayjs';

export type TFormValues = {
  storeName: string;
  isEveryday: boolean;
  phone: string;
  whatsapp: string;
  instagram: string;
  address: string;
  workingHours: [dayjs.Dayjs, dayjs.Dayjs];
}

export type TAddress = {
  address: string;
  coords: number[];
}