import Image from 'next/image';
import style from './style.module.scss';
import { IconArrow } from '@/src/components/Icons';

const OrderList = () => {
  return (
    <section className={style.orderList}>
      <div className={style.totalPriceContainer}>
        <h3 className={style.quantity}>
          <span className={style.text}>Общее количество:</span> <span>1 товара (1 шт.)</span>
        </h3>
        <h3 className={style.quantity}>
          <span className={style.text}>Стоимость:</span> <span>10000 сом</span>
        </h3>
        <h2 className={style.totalPrice}>
          <span className={style.text}>Итого:</span> <span>10000 сом</span>
        </h2>
      </div>
      <div className={style.order}>
        <Image
          className={style.image}
          src={'/images/laptop.webp'}
          alt="image"
          width={110}
          height={140}
        />
        <h3 className={style.info}> <span>Дата заказа</span> <br /> 10.04.2026 16:37</h3>
        <h3 className={style.info}> <span>Статус заказа</span> <br />Новый</h3>
        <h3 className={style.info}><span>Сумма</span><br />10000 сом</h3>

        <IconArrow className={style.arrow}/>
      </div>
    </section>
  );
};

export default OrderList;
