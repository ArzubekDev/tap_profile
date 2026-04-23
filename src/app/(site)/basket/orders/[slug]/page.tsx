// src/app/(site)/basket/orders/[slug]/page.tsx
import React from 'react';
import { notFound } from 'next/navigation';
import { MOCK_ORDERS } from '@/src/shared/ui/HistoryOrders/HistoryOrders';

import style from './style.module.scss';
import { IconArrow } from '@/src/components/Icons';
import { PrinterOutlined } from '@ant-design/icons';

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
      <div className={style.orderInfo}>
<div className={style.left}>
  <IconArrow className={style.arrow}/>
          <p><strong>Дата:</strong> <br />{order.date}</p>
        <p><strong>Статус:</strong><br /> <span style={{ color: order.statusColor }}>{order.status}</span></p>
        <p><strong>Сумма:</strong> <br /> {order.total}</p>
</div>
<PrinterOutlined/>
      </div>
      <div className={style.imageList}>
        {order.images.map((img, index) => (
          <img key={index} src={img} alt="product" width={100} />
        ))}
      </div>
    </section>
  );
};

export default OrderDetailPage;