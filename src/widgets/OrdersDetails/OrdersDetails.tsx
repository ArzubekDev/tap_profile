import Image from 'next/image';
import { notFound } from 'next/navigation';

import OrderInfo from '@/src/entities/OrderInfo/OrderInfo';
import { MOCK_ORDERS } from '../OrderHistoryList/OrderHistoryList';

import style from './style.module.scss';

interface IOrdersDetailsProps {
  slug: string;
}

const OrdersDetails = ({ slug }: IOrdersDetailsProps) => {
  const order = MOCK_ORDERS.find((item) => item.id === slug);

  if (!order) notFound();

  const totalAmount = order.items.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className={style.detailPage}>
      <OrderInfo order={order} totalAmount={totalAmount} />

      <div className={style.itemsList}>
        {order?.items?.map((item) => (
          <div key={item.id} className={style.productCard}>
            <div className={style.productImage}>
              <Image
                className={style.image}
                src={item.image}
                alt={item.name}
                width={120}
                height={160}
              />
            </div>

            <div className={style.productDetails}>
              <div className={style.titles}>
                <h3>{item.name}</h3>
                <p className={style.category}>Верхняя одежда</p>
              </div>

              <div className={style.priceContainer}>
                <span className={style.currentPrice}>{item.price} KGS</span>
                {item.oldPrice && <span className={style.oldPrice}>{item.oldPrice} KGS</span>}
              </div>

              <div className={style.shopInfo}>
                <p>
                  <span>Магазин:</span> <span className={style.shopName}>{item.shop}</span>
                </p>
                <p>
                  <span>Доставка:</span> <span className={style.deliveryStatus}>Нет</span>
                </p>
              </div>
            </div>

            <div className={style.reviewSection}>
              <h3>Ваш отзыв</h3>
              <p>Вы сможете оставить свой отзыв только после получения заказа.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrdersDetails;
