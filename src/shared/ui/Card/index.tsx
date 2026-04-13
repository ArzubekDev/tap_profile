import { IconCardFavorite, IconReviewMessage, IconStar } from '@/src/components/Icons';
import Image from 'next/image';
import style from './style.module.scss';

const Card = ({ el }: any) => {
  return (
    <div className={style.card}>
      <IconCardFavorite className={style.IconFav} />
      <div className={style.imageContainer}>
        <Image src={el.image} alt={el.title} fill className={style.img} sizes="(max-width: 768px) 100vw, 230px"/>
      </div>
      <div className={style.content}>
        <div className={style.info}>
          <h3 className={style.price}>{el.price}</h3>
          <h4 className={style.nameProduct}>{el.title.length > 15 ? el.title.slice(0, 15) + "..." : el.title}</h4>
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

export default Card;
