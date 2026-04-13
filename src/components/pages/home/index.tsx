'use client';
import { getFavoriteProducts } from '@/src/shared/api/instance.api';
import Card from '@/src/shared/ui/Card';
import { useQuery } from '@tanstack/react-query';
import style from './style.module.scss';

const Home = () => {
  const { data } = useQuery<any>({
    queryKey: ['posts'],
    queryFn: getFavoriteProducts,
  });
  return (
    <section className={style.home}>
      <div className="container">
        <div className={style.cards}>
          {data?.map((el: any) => (
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
