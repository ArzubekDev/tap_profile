import { Fragment } from 'react';
import style from './style.module.scss';
import Image from 'next/image';

const HowToOpenShop = () => {
  return (
    <section className={style.openshop}>
      <h2 className={style.headline}>Как открыть магазин в маркетплейсе Tap.kg</h2>
      <div className={style.block}>
        <Fragment>
          <h3 className={style.title}>ШАГ 1</h3>
          <p className={style.subtitle}>Вы нажимаете свой профиль и выбираете пункт "Создать магазин"</p>
        </Fragment>
        <Image src={"/images/laptop.webp"} alt='img' width={600} height={360}/>
      </div>
    </section>
  );
};

export default HowToOpenShop;
