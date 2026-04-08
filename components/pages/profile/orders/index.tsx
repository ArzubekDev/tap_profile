import { IconCartOrder } from '@/components/Icons';
import { Button } from 'antd';
import EmptyData from '@/components/form/emptyData';
import { useRouter } from 'next/navigation';
import { PATH_HOME } from '@/shared/consts/paths';

const Orders = () => {
  const route = useRouter()
  return (
   <EmptyData
      icon={<IconCartOrder/>}
      title="У вас нет заказов!"
      description={
        <>
          После совершения покупки все Ваши заказы попадают сюда. <br /> 
          В данный момент у вас еще нет заказов.
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

export default Orders;
