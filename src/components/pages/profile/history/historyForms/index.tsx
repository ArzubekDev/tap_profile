'use client'
import { Button, DatePickerProps } from "antd"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { DatePickerFormController, InputFormController, SelectFormController } from "@/src/components/form/Controllers"
import { THistoryForm, ZhistoryForm } from "../zod/zod";
import style from "./style.module.scss"

const HistoryForms = () => {
  const { control, handleSubmit, reset } = useForm<THistoryForm>({
    resolver: zodResolver(ZhistoryForm),
    defaultValues: {
      name: '',
      status: 'all',
      store: 'all',
      dateFrom: null,
      dateTo: null,
    },
  });

  const onSubmit = (data: THistoryForm) => console.log('history', data);
  return (
          <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <div className={style.top}>
          {/* Имя */}
          <InputFormController
            id="searchName"
            name="name"
            placeholder="Имя, фамилия, телефон..."
            label="Имя"
            control={control}
          />
          {/* Статус */}
          <SelectFormController
            name="status"
            control={control}
            label="Статус"
            options={statusOptions}
            className={style.searchInput}
          />
        </div>
        {/* Магазины */}
        <div className={style.center}>
          <SelectFormController
            name="store"
            control={control}
            label="Магазин"
            options={storeOptions}
            className={style.searchInput}
          />
        </div>
        {/* Даты */}
        <div className={style.bottom}>
          <DatePickerFormController
            name="dateFrom"
            control={control}
            label="Дата с"
            placeholder="дд.мм.гггг"
            format="DD.MM.YYYY"
          />
          <DatePickerFormController
            name="dateTo"
            control={control}
            label="Дата по"
            placeholder="дд.мм.гггг"
            format="DD.MM.YYYY"
          />
        </div>
        <div className={style.buttons}>
          <Button type="primary" htmlType="submit" className={style.apply}>
            Применить
          </Button>
          <Button onClick={() => reset()} className={style.reset}>
            Сбросить
          </Button>
        </div>
      </form>
  )
}

export default HistoryForms

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const statusOptions = [
  { value: 'all', label: 'Все статусы' },
  { value: 'new', label: 'Новый' },
  { value: 'confirmed', label: 'Подтвержден' },
  { value: 'pending_payment', label: 'Ожидает оплаты' },
  { value: 'paid', label: 'Оплачен' },
  { value: 'processing', label: 'В обработке' },
  { value: 'shipped', label: 'Передан в доставку' },
  { value: 'delivering', label: 'Доставляется' },
  { value: 'delivered', label: 'Доставлен' },
  { value: 'canceled', label: 'Отменен' },
  { value: 'refund', label: 'Возврат' },
  { value: 'completed', label: 'Завершён' },
];
const storeOptions = [
  { value: 'all', label: 'Все магазины' },
  { value: 'store', label: 'Магазин' },
];