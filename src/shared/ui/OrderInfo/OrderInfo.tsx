'use client';
import { IconArrow } from '@/src/components/Icons';
import { PrinterOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import style from './style.module.scss';

const OrderInfo = ({ order, totalAmount }: any) => {
  const route = useRouter();

  return (
    <div className={style.orderInfo}>
      <div className={style.left}>
        <IconArrow onClick={() => route.back()} className={style.arrow} />
        <p>
          <strong>Дата:</strong> <br />
          {order.date}
        </p>
        <p>
          <strong>Статус:</strong>
          <br /> <span style={{ color: order.statusColor }}>{order.status}</span>
        </p>
        <p>
          <strong>Сумма:</strong> <br /> {totalAmount}
        </p>
      </div>
      <PrinterOutlined />
    </div>
  );
};

export default OrderInfo;
