'use client';
import { SelectFormController } from '@/components/form/formControllers';
import InputController from '@/components/form/formControllers/inputFormController';
import { zodResolver } from '@hookform/resolvers/zod';
import type { DatePickerProps } from 'antd';
import { Button, DatePicker, Space } from 'antd';
import { useForm } from 'react-hook-form';
import Orders from '../orders';
import style from './style.module.scss';
import { ZhistoryForm } from './zod/zod';

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

const History: React.FC = () => {
  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(ZhistoryForm),
    defaultValues: {
      name: '',
      status: 'all',
      store: 'all',
      dateFrom: null, 
      dateTo: null,
    },
  });

  const onSubmit = (data: any) => console.log('history', data);
  return (
    <section className={style.history}>
      <h3 className={style.title}>История заказов</h3>
      <form className={style.form}>
        <div className={style.top}>
          <div className={style.innerTop}>
            <InputController
              id="searchName"
              name="name"
              placeholder="Имя, фамилия, телефон..."
              label="Имя"
              control={control}
            />
          </div>
          <div className={style.innerTop}>
            <SelectFormController
              name="status"
              control={control}
              label="Статус"
              options={statusOptions}
              className={style.searchInput}
            />
          </div>
        </div>
        <div className={style.center}>
          <SelectFormController
            name="status"
            control={control}
            label="Магазин"
            options={storeOptions}
            className={style.searchInput}
          />
        </div>
        <div className={style.bottom}>
          <div className={style.innerBottom}>
            <label htmlFor="from" className={style.label}>
              Дата с
            </label>
            <Space vertical>
              <DatePicker
                placeholder="дд.мм.гггг"
                format="DD.MM.YYYY"
                onChange={onChange}
                className={style.date}
              />
            </Space>
          </div>
          <div className={style.innerBottom}>
            <label htmlFor="from" className={style.label}>
              Дата по
            </label>
            <Space vertical>
              <DatePicker
                placeholder="дд.мм.гггг"
                format="DD.MM.YYYY"
                onChange={onChange}
                className={style.date}
              />
            </Space>
          </div>
        </div>
        <div className={style.buttons}>
          <Button type="primary" className={style.apply}>
            Применить
          </Button>
          <Button className={style.reset}>Сбросить</Button>
        </div>
      </form>
      <Orders />
    </section>
  );
};

export default History;
