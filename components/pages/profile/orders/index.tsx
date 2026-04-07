import { IconCartOrder } from '@/components/Icons';
import style from './style.module.scss';
import { Button } from 'antd';

const Orders = () => {
  return (
    <div className={style.orders}>
      <IconCartOrder className={style.iconCartOrder} />
      <h2 className={style.title}>У вас нет заказов!</h2>
      <p className={style.subtitle}>
        После совершения покупки все Ваши заказы попадают сюда. <br /> В данный момент у вас еще нет
        заказов.
      </p>
      <Button>Смотрет каталогов товаров</Button>
    </div>
  );
};

export default Orders;
