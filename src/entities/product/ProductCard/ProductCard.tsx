import Image from 'next/image';

import { IconCardFavorite, IconReviewMessage, IconStar } from '@/src/components/Icons';

import style from './style.module.scss';

const ProductCard = ({ item }: any) => {
  return (
    <div className={style.card}>
      <IconCardFavorite className={style.IconFav} />
      <div className={style.imageContainer}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className={style.img}
          sizes="(max-width: 768px) 100vw, 230px"
        />
      </div>
      <div className={style.content}>
        <div className={style.info}>
          <h3 className={style.price}>{item.price} с</h3>
          <h4 className={style.nameProduct}>
            {item.title.length > 22 ? item.title.slice(0, 22) + '...' : item.title}
          </h4>
        </div>
        <div className={style.else}>
          <div className={style.rating}>
            <IconStar /> 5
          </div>
          <div className={style.review}>
            <IconReviewMessage />
            12 отзывов
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
