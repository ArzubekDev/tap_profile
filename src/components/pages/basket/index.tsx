'use client'
import { Button } from 'antd';
import { useRouter } from 'next/navigation';

import EmptyData from '../../common/emptyData';
import { IconEmptyCart } from '../../Icons';

import style from './style.module.scss'

const Basket = () => {
  const router = useRouter();

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
    </section>
  );
};

export default Basket;