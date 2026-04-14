import CardSkeleton from '@/src/shared/ui/CardSkeleton/CardSkeleton';

import style from './style.module.scss';

const Favoriteloading = () => {
  return (
    <div className={style.favoriteSkeleton}>
      <div className={style.headerSkeleton}>
        <div className={style.titleSkeleton}></div>
        <div className={style.paginationSkeleton}></div>
      </div>
      <CardSkeleton />
    </div>
  );
};

export default Favoriteloading;
