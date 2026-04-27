'use client';
import { IconArrow } from '@/src/components/Icons';
import { Select } from 'antd';
import React from 'react';
import style from './style.module.scss';

const Pagination = () => {
  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    console.log(value);
  };
  return (
    <div className={style.pagination}>
      <div className={style.page}>
        <div className={style.button}>
          {[1, 2].map((el) => (
            <IconArrow key={el} className={style.dubleArrowBack} />
          ))}
        </div>

        <div className={style.button}>
          <IconArrow className={style.arrowBack} />
        </div>

        <div className={style.button}>1</div>

        <div className={style.button}>
          <IconArrow className={style.arrowNext} />
        </div>

        <div className={style.button}>
          {[1, 2].map((item) => (
            <IconArrow key={item} className={style.dubleArrowNext} />
          ))}
        </div>
      </div>
      <div className={style.select}>
        <span>1-50 из 195 заказов</span>
        <Select
          labelInValue
          defaultValue={{ value: '50', label: '50' }}
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            {
              value: '50',
              label: '50',
            },
            {
              value: '51',
              label: '51',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Pagination;
