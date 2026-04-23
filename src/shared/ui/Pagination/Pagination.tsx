import React from 'react';
import style from './style.module.scss';
import { IconArrow } from '@/src/components/Icons';

const Pagination = () => {
  return (
    <div className={style.page}>
      <div>{[1,2].map(el => <IconArrow key={el}/>)}</div>
      <div><IconArrow/></div>
      <div>1</div>
      <div><IconArrow/></div>
      <div>{[1,2].map(el => <IconArrow key={el}/>)}</div>
    </div>
  );
};

export default Pagination;