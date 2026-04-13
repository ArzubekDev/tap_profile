'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import type { DatePickerProps } from 'antd';

import { DatePickerFormController, SelectFormController } from '@/src/components/form/Controllers';
import { IconCartOrder } from '@/src/components/Icons';
import { PATH_HOME } from '@/src/shared/consts/paths';
import { THistoryForm, ZhistoryForm } from './zod/zod';
import EmptyData from '@/src/components/common/emptyData';
import InputController from '@/src/components/form/Controllers/inputFormController';
import OrderList from '@/src/shared/ui/OrderList';

import style from './style.module.scss';

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
  const route = useRouter();

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
    <section className={style.history}>
      <h3 className={style.title}>История заказов</h3>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <div className={style.top}>
          {/* Имя */}
          <InputController
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
      {/* EmptyData */}
      {/* <EmptyData
        icon={<IconCartOrder />}
        title="У вас нет заказов!"
        description={
          <>
            После совершения покупки все Ваши заказы попадают сюда. <br />В данный момент у вас еще
            нет заказов.
          </>
        }
        action={
          <Button onClick={() => route.push(PATH_HOME)} type="primary" size="large">
            Посмотреть каталог товаров
          </Button>
        }
      /> */}
      {/* OrderList */}
      <OrderList />
    </section>
  );
};

export default History;
