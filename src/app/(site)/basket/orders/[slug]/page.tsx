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

  if (!order) {
    notFound();
  }

  return (
    <section className={style.detailPage}>
      <OrderInfo order={order}/>
      <div className={style.imageList}>
        {order.images.map((img, index) => (
          <img key={index} src={img} alt="product" width={100} />
        ))}
      </div>
    </section>
  );
};

export default OrderDetailPage;
