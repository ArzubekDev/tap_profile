
import dayjs from 'dayjs';

export type TFormValues = {
  storeName: string;
  phone: string
  workingHours: [dayjs.Dayjs, dayjs.Dayjs];
}

export type TAddress = {
  address: string;
  coords: number[];
}