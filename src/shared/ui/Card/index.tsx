import Image from 'next/image';
import style from './style.module.scss';

const Card = () => {
  return (
    <div className={style.card}>
      <div className={style.imageContainer}>
        <Image src={'/images/laptop.webp'} alt="Image" width={200} height={230}/>
      </div>
      <h3>Laptop</h3>
      <h5>12 000 c</h5>
    </div>
  );
};

export default Card;
