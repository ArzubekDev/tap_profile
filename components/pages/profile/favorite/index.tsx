"use client"
import EmptyData from '@/components/form/emptyData';
import { IconCartOrder } from '@/components/Icons';
import { PATH_HOME } from '@/shared/consts/paths';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';

const Favorite = () => {
  const route = useRouter()
  return (
    <EmptyData
      icon={<IconCartOrder />}
      title="У вас нет заказов!"
      description={
        <>
          После совершения покупки все Ваши заказы попадают сюда. <br />В данный момент у вас еще
          нет заказов.
        </>
      }
      action={
        <Button onClick={() => route.push(PATH_HOME)} type="primary" size="large">
          Посмотреть каталог товаров
        </Button>
      }
    />
  );
};

export default Favorite;
