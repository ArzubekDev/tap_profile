import Image from 'next/image';
import style from './style.module.scss';
import { IconStar } from '@/src/components/Icons';

const Card = () => {
  return (
    <div className={style.card}>
      <div className={style.imageContainer}>
        <Image src={'/images/laptop.webp'} alt="Image" width={200} height={230}/>
      </div>
      <h3>Laptop</h3>
      <h5>12 000 c</h5>
      <div>
        <div className={style.rating}>
          <IconStar/>
          5
        </div>
        <div className={style.review}>
          
12 отзывов
        </div>
      </div>
    </div>
  );
};

export default Card;
