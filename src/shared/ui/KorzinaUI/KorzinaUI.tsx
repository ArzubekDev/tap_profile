'use client';
import { IconCart } from '@/src/components/Icons';
import PopoverLayout from '@/src/components/layout/popover/PopoverLayout';
import { useRouter } from 'next/navigation';
import style from './style.module.scss';
import KorzinaDropDown from '../KorzinaDropDown/KorzinaDropDown';

const KorzinaUI = () => {
  const route = useRouter();
  return (
    <PopoverLayout
      content={KorzinaDropDown}
      placement="bottomRight"
      trigger="hover"
      innerClassName={style.profilePopoverContent}
    >
      <div onClick={() => route.push('/basket')} className={style.navItem}>
        <IconCart className={style.navItemIcon} />
        <span className={style.navItemText}>Корзина</span>
      </div>
    </PopoverLayout>
  );
};

export default KorzinaUI;
