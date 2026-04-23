import React from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import { IconArrow } from '@/src/components/Icons';

const HistoryOrders = () => {
  return (
    <div className={style.page}>
      <div className={style.imagesContainer}>
        <Image className={style.image} src={'/images/laptop.webp'} alt='img' width={70} height={92}/>
        <Image className={style.image} src={'/images/laptop.webp'} alt='img' width={70} height={92}/>
        <Image className={style.image} src={'/images/laptop.webp'} alt='img' width={70} height={92}/>
      </div>
      <div className={style.content}>
        <div className={style.info}>
        <h4 className={style.title}><span>Дата заказа</span> <br /> 22.04.2026 15:19</h4>
        <h4 className={style.title}><span>Статус заказа</span> <br /> Оформлен</h4>
        <h4 className={style.title}><span>Сумма</span> <br /> 12 000</h4>
      </div>
      <IconArrow className={style.arrow}/>
      </div>
    </div>
  );
};

export default HistoryOrders;