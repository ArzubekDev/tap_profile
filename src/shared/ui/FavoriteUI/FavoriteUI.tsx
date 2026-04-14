'use client'

import { IconFavorite } from '@/src/components/Icons';
import style from './style.module.scss';
import { useRouter } from 'next/navigation';

const FavoriteUI = () => {
  const route = useRouter()
  return (
    <div onClick={() => route.push("/basket/favorite-list")} className={style.navItem}>
      <IconFavorite className={style.navItemIcon} />
      <span className={style.navItemText}>Избранное</span>
    </div>
  );
};

export default FavoriteUI;
