'use client';
import { getProducts } from '@/src/shared/api/instance.api';
import Card from '@/src/shared/ui/Card';
import { useQuery } from '@tanstack/react-query';
import style from './style.module.scss';
import Pages from './pages';

const Favorite = () => {
  const { data } = useQuery<any>({
    queryKey: ['favorites'],
    queryFn: getProducts,
  });

  return (
    <div className={style.favorite}>
      <div className={style.header}>
        <h3>Избранные <span>({data?.length})</span></h3>
        <Pages/>
      </div>
      <div className={style.content}>
        {data?.map((el: any) => (
          <div key={el.id}>
            <Card el={el} />
          </div>
        ))}
      </div>
      <div className={style.footer}>
      <Pages/>
      </div>
    </div>
  );
};

export default Favorite;
