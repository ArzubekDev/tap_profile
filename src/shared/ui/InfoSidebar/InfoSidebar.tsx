import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { PATH_HOW_TO_MAKE_ORDER } from '@/src/shared/consts/paths';
import style from './style.module.scss';

const InfoSidebar = () => {
  const pathname = usePathname();
  // Link
  const renderLink = (el: TInfoSidebar) => (
    <Link
      href={el.link}
      key={el.id}
      className={cn(style.item, {
        [style.active]: pathname === el.link,
      })}
    >
      {el.title}
    </Link>
  );
  return (
    <aside className={style.infoSidebar}>
      <div className={style.block}>
        <h3>Покупателям</h3>
        {buyers.map(renderLink)}
      </div>
      <div className={style.block}>
        <h3>Продавцам</h3>
        {seller.map(renderLink)}
      </div>
    </aside>
  );
};

export default InfoSidebar;

type TInfoSidebar = {
  id: number;
  title: string;
  link: string;
};
const buyers: TInfoSidebar[] = [
  {
    id: 1,
    title: 'Как сделать заказ',
    link: PATH_HOW_TO_MAKE_ORDER,
  },
  {
    id: 2,
    title: 'Как оплатить',
    link: '#',
  },
  {
    id: 3,
    title: 'Доставка',
    link: '#',
  },
  {
    id: 4,
    title: 'Возврат товара',
    link: '#',
  },
  {
    id: 5,
    title: 'Пользователское соглашение',
    link: '#',
  },
];
const seller: TInfoSidebar[] = [
  {
    id: 6,
    title: 'О нас',
    link: '#',
  },
  {
    id: 7,
    title: 'Как открыть магазин',
    link: '#',
  },
  {
    id: 8,
    title: 'Как продавать на маркетплейсе',
    link: '#',
  },
  {
    id: 9,
    title: 'Безопасность',
    link: '#',
  },
  {
    id: 10,
    title: 'Политика конфиденциальности',
    link: '#',
  },
];
