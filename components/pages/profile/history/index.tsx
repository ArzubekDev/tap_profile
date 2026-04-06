import { Input, Select } from 'antd';
import style from './style.module.scss';

const History = () => {
  return (
    <div className={style.history}>
      <h3>История заказов</h3>
      <form className={style.form}>
        <div className={style.top}>
          <div className={style.innerTop}>
            <label htmlFor="search">
              <input type="text" />
              Имя
            </label>
            <Input
              id="search"
              className={style.searchInput}
              placeholder="Имя, фамилия, телефон..."
              maxLength={150}
              variant="borderless"
            />
          </div>
          <div className={style.innerTop}>
            <label htmlFor="status">
              <input type="text" />
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
          <label htmlFor=""></label>
        </div>
        <div className={style.bottom}></div>
      </form>
    </div>
  );
};

export default History;
