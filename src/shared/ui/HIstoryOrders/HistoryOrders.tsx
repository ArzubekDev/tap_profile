import { IconArrow } from '@/src/components/Icons';
import Image from 'next/image';
import Link from 'next/link';
import { PATH_BASKET_HISTORY } from '../../consts/paths';
import style from './style.module.scss';

const HistoryOrders = () => {
  return (
    <div className={style.historyOrders}>
      {MOCK_ORDERS.map((order, idx) => (
        <Link key={idx} href={`/basket/orders/${order.id}`} className={style.page}>
          <div className={style.imagesContainer}>
            {order.images.map((img: any, index: any) => (
              <div key={index} className={style.imageWrapper}>
                <Image src={img} alt="product" width={70} height={92} className={style.image} />
              </div>
            ))}
          </div>

          <div className={style.content}>
            <div className={style.info}>
              <div className={style.item}>
                <span>Дата заказа</span>
                <p>{order.date}</p>
              </div>
              <div className={style.item}>
                <span>Статус заказа</span>
                <p style={{ color: order.statusColor }}>{order.status}</p>
              </div>
              <div className={style.item}>
                <span>Сумма</span>
                <p>{order.total}</p>
              </div>
            </div>
            <IconArrow className={style.arrow} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HistoryOrders;

export const MOCK_ORDERS = [
  {
    id: '1',
    date: '22.04.2026 15:19',
    status: 'Оформлен',
    statusColor: '#FFB800',
    total: '12 000 KGS',
    images: ['/images/laptop.webp', '/images/laptop.webp', '/images/laptop.webp'],
  },
  {
    id: '2',
    date: '21.04.2026 10:00',
    status: 'Доставлен',
    statusColor: '#27AE60',
    total: '4 100 KGS',
    images: ['/images/laptop.webp'],
  },
];
