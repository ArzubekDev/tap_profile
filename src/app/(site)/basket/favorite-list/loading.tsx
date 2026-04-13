// src/app/(site)/basket/favorite-list/loading.tsx
import style from './style.module.scss';

export default function Loading() {
  const skeletons = Array.from({ length: 12 });

  return (
    <div className={style.loadingContainer}>
      <div className={style.grid}>
        {skeletons.map((_, index) => (
          <div key={index} className={style.skeletonCard}>
            <div className={style.imageSkeleton} />
            <div className={style.contentSkeleton}>
              <div className={style.line} />
              <div className={style.lineShort} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}