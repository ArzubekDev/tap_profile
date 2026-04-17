import Link from 'next/link';
import { BlockProps } from '../type';
import { PATH_ABOUT, PATH_HOW_TO_OPEN_SHOP, PATH_PRIVACY_POLICY } from '@/src/shared/consts/paths';
import style from '../style.module.scss';

const Seller = () => {
  return (
    <div className={style.block}>
      <h5 className={style.title}>Продавцам</h5>
      {seller.map((el, idx) => (
        <Link href={el.link} className={style.subtitle} key={idx}>{el.title}</Link>
      ))}
    </div>
  );
};

export default Seller;

const seller: BlockProps[] = [
  {
    title: 'О нас',
    link: PATH_ABOUT
  },
  {
    title: 'Как открыть магазин',
    link: PATH_HOW_TO_OPEN_SHOP
  },
  {
    title: 'Как продавать на маркетплейсе',
    link: '#'
  },
  {
    title: 'Безопасность',
    link: '#'
  },
  {
    title: 'Политика конфиденциальности',
    link: PATH_PRIVACY_POLICY
  },
];
