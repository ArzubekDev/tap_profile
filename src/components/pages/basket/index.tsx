'use client';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';

import EmptyData from '../../common/emptyData';
import { IconEmptyCart } from '../../Icons';

import { getProducts } from '@/src/shared/api/product.api';
import { PRODUCT_KEYS } from '@/src/shared/api/query-keys';
import Card from '@/src/shared/ui/Card';
import { useQuery } from '@tanstack/react-query';
import style from './style.module.scss';

const Basket = () => {
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
      <div className={style.content}>
        <h3 className={style.title}>Рекомендуем к покупке</h3>
        <div className={style.products}>
          {products?.map((el: any) => (
            <div key={el.id}>
              <Card el={el} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Basket;
