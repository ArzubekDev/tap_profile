'use client';
import { getFavoriteProducts } from '@/src/shared/api/instance.api';
import Card from '@/src/shared/ui/Card';
import { useQuery } from '@tanstack/react-query';
import style from "./style.module.scss"

const Favorite = () => {
  const { data } = useQuery<any>({
    queryKey: ['posts'],
    queryFn: getFavoriteProducts
  });

  return (
    <div className={style.favorite}>
      {data.map((el: any) => (
        <div key={el.id}>
         <Card el={el}/>
        </div>
      ))}
    </div>
  );
};

export default Favorite;
