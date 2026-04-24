import { IconArrow } from '@/src/components/Icons';
import Image from 'next/image';
import Link from 'next/link';
import { PATH_BASKET_HISTORY } from '../../consts/paths';
import style from './style.module.scss';

const HistoryOrders = () => {
  return (
    <div className={style.historyOrders}>
      {MOCK_ORDERS.map((order, idx) => {
        const totalAmount = order.items.reduce((sum, item) => sum + item.price, 0);
        return (
          (
        <Link key={idx} href={`${PATH_BASKET_HISTORY}/${order.id}`} className={style.page}>
          <div className={style.imagesContainer}>
            {order.items.map((item) => (
              <div key={item.id} className={style.imageWrapper}>
                <Image src={item.image} alt={item.name} width={70} height={92} className={style.image} />
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
                <p>{totalAmount}</p>
              </div>
            </div>
            <IconArrow className={style.arrow} />
          </div>
        </Link>
      )
        )
      })}
    </div>
  );
};

export default HistoryOrders;

export const MOCK_ORDERS = [
  {
    id: '1',
    date: '04.05.2024 14:00',
    status: 'Оформлен',
    statusColor: '#FFB800',
    items: [
      {
        id: 'p1',
        name: 'Свитер из шерсти горного барана',
        price: 1600,
        oldPrice: '3200',
        shop: 'Elle Collection',
        image: '/images/laptop.webp'
      },
      {
        id: 'p2',
        name: 'Свитер в полоску под Zara',
        price: 1400,
        shop: 'Elle Collection',
        image: '/images/laptop.webp'
      },
      {
        id: 'p3',
        name: 'Свитер в полоску под Zara',
        price: 1400,
        shop: 'Elle Collection',
        image: '/images/laptop.webp'
      }
    ],
  },
];
