import React from 'react';
import style from './style.module.scss';
import { IconArrow } from '@/src/components/Icons';

const Pagination = () => {
  return (
    <div className={style.page}>
      <div className={style.button}>
        {[1, 2].map((el) => (
          <IconArrow key={el} className={style.dubleArrowBack} />
        ))}
      </div>

      <div className={style.button}>
        <IconArrow className={style.arrowBack} />
      </div>

      <div className={style.activeNumber}>1</div>

      <div className={style.button}>
        <IconArrow className={style.arrowNext} />
      </div>

      <div className={style.button}>
        {[1, 2].map((el) => (
          <IconArrow key={el} className={style.dubleArrowNext} />
        ))}
      </div>
    </div>
  );
};

export default Pagination;