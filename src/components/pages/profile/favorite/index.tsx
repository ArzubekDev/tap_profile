'use client';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getProducts } from '@/src/shared/api/product.api';
import { PRODUCT_KEYS } from '@/src/shared/api/query-keys';

import Card from '@/src/shared/ui/Card/Card';
import PaginationInfo from './pagination-info';

import style from './style.module.scss';

const FavoriteView: React.FC = () => {
const { data } = useSuspenseQuery<any[]>({
    queryKey: PRODUCT_KEYS.all,
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className={style.favorite}>
      <div className={style.header}>
        <h3>
          Избранные <span>({data?.length})</span>
        </h3>
        <PaginationInfo />
      </div>
      <div className={style.content}>
        {data.map((el: any) => (
          <div key={el.id}>
            <Card el={el} />
          </div>
        ))}
      </div>
      <div className={style.footer}>
        <PaginationInfo />
      </div>
    </div>
  );
};

export default FavoriteView;
