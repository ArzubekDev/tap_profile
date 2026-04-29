'use client';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';

import EmptyData from '../../shared/ui/common/emptyData';
import { IconEmptyCart } from '../../shared/ui/Icons';

import { getProducts } from '@/src/shared/api/product.api';
import { PRODUCT_KEYS } from '@/src/shared/api/query-keys';
import { useQuery } from '@tanstack/react-query';

import style from './style.module.scss';

const BasketView = () => {
  const router = useRouter();
  const { data: products } = useQuery({
    queryKey: PRODUCT_KEYS.all,
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5,
  });
  return (
    <section className={style.basket}>
      <EmptyData
        icon={<IconEmptyCart style={{ fontSize: '64px', color: '#bfbfbf' }} />}
        title="В корзине пусто!"
        description="Воспользуйтесь поиском, чтобы найти всё, что нужно."
        action={
          <Button type="primary" size="large" onClick={() => router.push('/')}>
            Начать покупки
          </Button>
        }
      />

      {/* Контент */}
      <div className="container">
        <div className={style.content}>
          <h3 className={style.title}>Рекомендуем к покупке</h3>
          <div className={style.products}></div>
        </div>
      </div>
    </section>
  );
};

export default BasketView;
