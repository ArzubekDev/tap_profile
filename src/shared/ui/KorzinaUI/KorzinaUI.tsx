import { IconCart } from '@/src/components/Icons';
import style from './style.module.scss';

const KorzinaUI = () => {
  return (
    <div className={style.navItem}>
      <IconCart className={style.navItemIcon} />
      <span className={style.navItemText}>Корзина</span>
    </div>
  );
};

export default KorzinaUI;
