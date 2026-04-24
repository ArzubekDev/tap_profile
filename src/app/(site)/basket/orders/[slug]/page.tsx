import { MOCK_ORDERS } from '@/src/shared/ui/HistoryOrders/HistoryOrders';
import { notFound } from 'next/navigation';

import OrderInfo from '@/src/shared/ui/OrderInfo/OrderInfo';
import style from './style.module.scss';

interface Props {
  params: Promise<{ slug: string }>;
}

const OrderDetailPage = async ({ params }: Props) => {
  const { slug } = await params;
  const order = MOCK_ORDERS.find((item) => item.id === slug);

  if (!order) notFound();

  return (
    <section className={style.detailPage}>
      <OrderInfo order={order}/>
      
      <div className={style.itemsList}>
        {order.items.map((product) => (
          <div key={product.id} className={style.productCard}>
            <div className={style.productImage}>
               <img src={product.image} alt={product.name} width={100} />
            </div>
            <div className={style.productDetails}>
               <h3>{product.name}</h3>
               <p className={style.price}>{product.price} KGS</p>
               <p className={style.shop}>Магазин: {product.shop}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrderDetailPage;
