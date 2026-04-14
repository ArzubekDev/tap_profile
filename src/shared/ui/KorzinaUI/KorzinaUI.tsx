'use client'
import { IconCart } from '@/src/components/Icons';
import style from './style.module.scss';
import { useRouter } from 'next/navigation';

const KorzinaUI = () => {
  const route = useRouter()
  return (
    <div onClick={() => route.push('/basket')} className={style.navItem}>
      <IconCart className={style.navItemIcon} />
      <span className={style.navItemText}>Корзина</span>
    </div>
  );
};

export default KorzinaUI;
