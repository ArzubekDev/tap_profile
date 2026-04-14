import { IconCart } from '@/src/components/Icons';
import PopoverLayout from '@/src/components/layout/popover/PopoverLayout';
import style from './style.module.scss';
import KorzinaDropDown from '../KorzinaDropDown/KorzinaDropDown';

const KorzinaUI = () => {
  return (
    <PopoverLayout
      content={KorzinaDropDown}
      placement="bottomRight"
      trigger="hover"
      innerClassName={style.profilePopoverContent}
    >
      <div className={style.navItem}>
        <IconCart className={style.navItemIcon} />
        <span className={style.navItemText}>Корзина</span>
      </div>
    </PopoverLayout>
  );
};

export default KorzinaUI;
