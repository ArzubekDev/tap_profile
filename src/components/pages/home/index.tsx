'use client';
import Card from '@/src/shared/ui/Card/Card';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/src/shared/api/product.api';
import { PRODUCT_KEYS } from '@/src/shared/api/query-keys';

import style from './style.module.scss';

const Home = () => {
  const { data: products } = useQuery<any>({
    queryKey: PRODUCT_KEYS.all,
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5,
  });
  return (
    <section className={style.home}>
      <div className="container">
        <div className={style.cards}>
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

export default Home;
