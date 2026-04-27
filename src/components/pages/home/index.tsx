'use client';
import { useQuery } from '@tanstack/react-query';
import { Button } from 'antd';
import { useState } from 'react';

import { getProducts } from '@/src/shared/api/product.api';
import { PRODUCT_KEYS } from '@/src/shared/api/query-keys';

import ProductCard from '@/src/entities/product/ProductCard/ProductCard';
import sizeCharts from '@/src/entities/product/size-charts/sizeCharts.json';
import SizeChartModal from '@/src/entities/product/ui/size-chart-modal/SizeChartModal';

import style from './style.module.scss';

//Временно: Для теста Таблицы размеров
const product = {
  id: 1,
  name: 'Oversize T-shirt',
  gender: 'male', // female, female_kid, male_kid
  category: 't-shirt',
  isSet: false,
};

const HomeView = () => {
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
        {/* Временно: кнопка для теста Таблица размеров */}
        <Button className={style.sizeButton} type="primary" onClick={showDrawer}>
          Таблица размеров
        </Button>
        <div className={style.cardsContainer}>
          {products?.map((el: any) => (
            <div key={el.id}>
              <ProductCard el={el} />
            </div>
          ))}
        </div>
      </div>
      {/* Модалка - таблица размеров */}
      <SizeChartModal close={onClose} open={open} charts={currentCharts} />
    </section>
  );
};

export default HomeView;
