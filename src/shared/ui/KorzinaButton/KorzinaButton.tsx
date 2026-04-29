import { IconCart } from '@/src/shared/ui/Icons';
import PopoverLayout from '@/src/shared/ui/popover/PopoverLayout';
import KorzinaDropDown from '../KorzinaDropDown/KorzinaDropDown';

import style from './style.module.scss';

const KorzinaButton = () => {
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

export default KorzinaButton;
