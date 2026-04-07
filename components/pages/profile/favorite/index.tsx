import { IconHeartFavorte } from '@/components/Icons';
import { Button } from 'antd';
import style from './style.module.scss';

const Favorite = () => {
  return (
    <div className={style.favorite}>
      <IconHeartFavorte className={style.iconheartfavorite} />
      <h2 className={style.title}>У вас нет заказов!</h2>
      <p className={style.subtitle}>
        После совершения покупки все Ваши заказы попадают сюда. <br /> В данный момент у вас еще нет
        заказов.
      </p>
      <Button className={style.button} type="primary">Посмотрет каталогов товаров</Button>
    </div>
  );
};

export default Favorite;
