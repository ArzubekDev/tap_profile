'use client';
import { Button, DatePicker, Input, Select, Space } from 'antd';
import type { DatePickerProps } from 'antd';
import style from './style.module.scss';
import Orders from '../orders';


const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const History: React.FC = () => {
  return (
    <div className={style.history}>
      <h3 className={style.title}>История заказов</h3>
      <form className={style.form}>
        <div className={style.top}>
          <div className={style.innerTop}>
            <label htmlFor="name" className={style.label}>
              Поиск
            </label>
            <Input
              id="name"
              className={style.searchInput}
              placeholder="Имя, фамилия, телефон..."
              maxLength={150}
              required
            />
          </div>
          <div className={style.innerTop}>
            <label htmlFor="status" className={style.label}>
              Статус
            </label>
            <Select
              className={style.searchInput}
              defaultValue="all"
              options={[
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
              ]}
            />
          </div>
        </div>
        <div className={style.center}>
          <label htmlFor="status" className={style.label}>
            Магазины
          </label>
          <Select
            className={style.searchInput}
            defaultValue="all"
            options={[
              { value: 'all', label: 'Все магазины' },

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
            ]}
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
          <Button type='primary' className={style.apply}>Применить</Button>
          <Button className={style.reset}>Сбросить</Button>
        </div>
      </form>
      <Orders/>
    </div>
  );
};

export default History;
