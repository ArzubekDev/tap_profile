import { Button } from 'antd';
import { useRouter } from 'next/navigation';

import style from './style.module.scss';

const KorzinaDropDown = () => {
  const route = useRouter();
  return (
    <div className={style.kozinaDropDown}>
      <h4>Общая сумма: 32 KGS</h4>
      <Button onClick={() => route.push('/basket')} type="primary">
        Перейти в корзину
      </Button>
    </div>
  );
};

export default KorzinaDropDown;
