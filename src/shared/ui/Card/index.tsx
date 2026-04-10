import { IconFavorite, IconHeartFavorte, IconStar } from '@/src/components/Icons';
import IconReviewMessage from '@/src/components/Icons/components/IconReviewMessage';
import Image from 'next/image';
import style from './style.module.scss';

const Card = () => {
  return (
    <div className={style.card}>
      <IconHeartFavorte/>
      <div className={style.imageContainer}>
        <Image
          src={'/images/laptop.webp'}
          alt="Image"
          width={200}
          height={230}
          className={style.img}
        />
      </div>
     <div className={style.content}>
       <div className={style.info}>
        <h3 className={style.price}>12 000 cом</h3>
        <h4 className={style.nameProduct}>Laptop</h4>
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
