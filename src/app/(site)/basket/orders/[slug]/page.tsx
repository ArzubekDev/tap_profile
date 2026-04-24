import { MOCK_ORDERS } from '@/src/shared/ui/HistoryOrders/HistoryOrders';
import { notFound } from 'next/navigation';

import OrderInfo from '@/src/shared/ui/OrderInfo/OrderInfo';
import Image from 'next/image';
import style from './style.module.scss';

interface Props {
  params: Promise<{ slug: string }>;
}

const OrderDetailPage = async ({ params }: Props) => {
  const { slug } = await params;
  const order = MOCK_ORDERS.find((item) => item.id === slug);

  if (!order) notFound();

  const totalAmount = order.items.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className={style.detailPage}>
      <OrderInfo order={order} totalAmount={totalAmount} />

      <div className={style.itemsList}>
        {order.items.map((product) => (
          <div key={product.id} className={style.productCard}>
            <div className={style.productImage}>
              <Image src={product.image} alt={product.name} width={120} height={160} />
            </div>

            <div className={style.productDetails}>
             <div className={style.titles}>
               <h3>{product.name}</h3>
              <p className={style.category}>Верхняя одежда</p>
             </div>

              <div className={style.priceContainer}>
                <span className={style.currentPrice}>{product.price} KGS</span>
                {product.oldPrice && <span className={style.oldPrice}>{product.oldPrice} KGS</span>}
              </div>

              <div className={style.shopInfo}>
                <p>
                  <span>Магазин:</span> <span className={style.shopName}>{product.shop}</span>
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

export default OrderDetailPage;
