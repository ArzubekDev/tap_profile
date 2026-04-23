// src/app/(site)/basket/orders/[slug]/page.tsx
import React from 'react';
import style from './style.module.scss';
import { notFound } from 'next/navigation';
import { MOCK_ORDERS } from '@/src/shared/ui/HistoryOrders/HistoryOrders';

interface Props {
  params: Promise<{ slug: string }>;
}

const OrderDetailPage = async ({ params }: Props) => {
  const { slug } = await params;

  // Массивден керектүү заказды id аркылуу табабыз
  const order = MOCK_ORDERS.find((item) => item.id === slug);

  // Эгер андай заказ жок болсо, 404 барагын көрсөтөбүз
  if (!order) {
    notFound();
  }

  return (
    <section className={style.detailPage}>
      <h1>Заказ №{order.id}</h1>
      <div className={style.orderInfo}>
        <p><strong>Дата:</strong> {order.date}</p>
        <p><strong>Статус:</strong> <span style={{ color: order.statusColor }}>{order.status}</span></p>
        <p><strong>Жалпы сумма:</strong> {order.total}</p>
      </div>
      
      <h3>Товары в заказе:</h3>
      <div className={style.imageList}>
        {order.images.map((img, index) => (
          <img key={index} src={img} alt="product" width={100} />
        ))}
      </div>
    </section>
  );
};

export default OrderDetailPage;