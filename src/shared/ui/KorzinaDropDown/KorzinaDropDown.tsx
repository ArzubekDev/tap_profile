import { Button } from 'antd';
import style from './style.module.scss';

const KorzinaDropDown = () => {
  return (
    <div className={style.content}>
      <h4>Общая сумма: 32 KGS</h4>
      <Button type="primary">Перейти в корзину</Button>
    </div>
  );
};

export default KorzinaDropDown;
