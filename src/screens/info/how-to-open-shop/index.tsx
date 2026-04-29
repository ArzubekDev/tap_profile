import { Fragment } from 'react';
import Image from 'next/image';

import style from './style.module.scss';

const HowToOpenShopView = () => {
  return (
    <section className={style.openshop}>
      <h2 className={style.headline}>Как открыть магазин в маркетплейсе Tap.kg</h2>
      <div className={style.block}>
          <h3 className={style.title}>ШАГ 1</h3>
          <p className={style.subtitle}>Вы нажимаете свой профиль и выбираете пункт "Создать магазин"</p>
        <Image src={"/images/laptop.webp"} alt='img' width={600} height={360}/>
      </div>
    </section>
  );
};

export default HowToOpenShopView;
