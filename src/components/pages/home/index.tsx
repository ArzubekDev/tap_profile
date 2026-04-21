'use client';
import { getProducts } from '@/src/shared/api/product.api';
import { PRODUCT_KEYS } from '@/src/shared/api/query-keys';
import Card from '@/src/shared/ui/Card/Card';
import { useQuery } from '@tanstack/react-query';

import { Button } from 'antd';
import { useState } from 'react';
import sizeCharts from '@/src/entities/product/size-charts/sizeCharts.json'

import SizeChartModal from '@/src/entities/product/ui/SizeChartModal';
import style from './style.module.scss';

const product = {
    id: 1,
    name: "Oversize T-shirt",
    gender: "male",
    category: "t-shirt",
    isSet: false
  };

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

  const getChartsForProduct = () => {
    const genderData = sizeCharts[product.gender as keyof typeof sizeCharts];
    
    if (product.isSet) {
      return [(genderData as any)['t-shirt'], (genderData as any)['trousers']];
    }
    
    return [(genderData as any)[product.category]];
  };

  const currentCharts = getChartsForProduct();

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
      <SizeChartModal close={onClose} open={open} charts={currentCharts}/>
    </section>
  );
};

export default Home;
