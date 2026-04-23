import React from 'react';
import style from './style.module.scss';
import { IconStar } from '@/src/components/Icons';

const Reviews = () => {
  return (
    <section className={style.page}>
      <div className={style.header}>
        <h3>Отзывы <span>23</span></h3>
        <div><span>4.3</span> <span><IconStar/></span></div>
      </div>
    </section>
  );
};

export default Reviews;