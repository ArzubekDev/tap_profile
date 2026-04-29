'use client';
import { IconArrow } from '@/src/shared/ui/Icons';
import { PrinterOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

import style from './style.module.scss';

const OrderInfo = ({ order, totalAmount }: any) => {
  const route = useRouter();

  return (
    <div className={style.orderInfo}>
      <div className={style.content}>
        <IconArrow onClick={() => route.back()} className={style.arrow} />
        <p>
          Дата: <br />
          <strong>{order.date}</strong>
        </p>
        <p>
          Статус:
          <br />
          <span style={{ color: order.statusColor }}>
            <strong>{order.status}</strong>
          </span>
        </p>
        <p>
          Сумма: <br /> <strong> {totalAmount} KGS</strong>
        </p>
      </div>
      <PrinterOutlined />
    </div>
  );
};

export default OrderInfo;
