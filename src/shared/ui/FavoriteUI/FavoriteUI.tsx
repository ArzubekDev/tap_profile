import { IconFavorite } from '@/src/components/Icons';
import style from './style.module.scss';

const FavoriteUI = () => {
  return (
    <div className={style.navItem}>
      <IconFavorite className={style.navItemIcon} />
      <span className={style.navItemText}>Избранное</span>
    </div>
  );
};

export default FavoriteUI;
