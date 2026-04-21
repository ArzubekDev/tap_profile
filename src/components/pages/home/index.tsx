'use client';
import { getProducts } from '@/src/shared/api/product.api';
import { PRODUCT_KEYS } from '@/src/shared/api/query-keys';
import Card from '@/src/shared/ui/Card/Card';
import { useQuery } from '@tanstack/react-query';

import { Button } from 'antd';
import { useState } from 'react';

import style from './style.module.scss';
import SizeChartModal from '@/src/entities/product/ui/SizeChartModal';

const Home = () => {
  const { data: products } = useQuery<any>({
    queryKey: PRODUCT_KEYS.all,
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5,
  });

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <section className={style.home}>
      <div className="container">
        <Button className={style.sizeButton} type="primary" onClick={showDrawer}>
          Таблица размеров
        </Button>
        <div className={style.cards}>
          {products?.map((el: any) => (
            <div key={el.id}>
              <Card el={el} />
            </div>
          ))}
        </div>
      </div>
      <SizeChartModal close={onClose} open={open}/>
    </section>
  );
};

export default Home;
