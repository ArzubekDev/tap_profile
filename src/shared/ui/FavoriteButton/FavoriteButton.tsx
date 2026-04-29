'use client';

import { IconFavorite } from '@/src/shared/ui/Icons';
import { useRouter } from 'next/navigation';

import style from './style.module.scss';

const FavoriteButton = () => {
  const route = useRouter();

  return (
    <div onClick={() => route.push('/basket/favorite-list')} className={style.navItem}>
      <IconFavorite className={style.navItemIcon} />
      <span className={style.navItemText}>Избранное</span>
    </div>
  );
};

export default FavoriteButton;
