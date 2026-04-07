"use client"
import type { CalendarProps } from 'antd';
import { Calendar, Input, Select, theme  } from 'antd';
import type { Dayjs } from 'dayjs';
import style from './style.module.scss';

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

const History = () => {
  const { token } = theme.useToken();

  const wrapperStyle: React.CSSProperties = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <div className={style.history}>
      <h3>История заказов</h3>
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
            <label htmlFor="from">Дата с</label>
            <div style={wrapperStyle}>
              <Calendar fullscreen={false} onPanelChange={onPanelChange} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default History;
