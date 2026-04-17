import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { PATH_ABOUT, PATH_DELIVERY, PATH_HOW_TO_MAKE_ORDER, PATH_HOW_TO_OPEN_SHOP, PATH_HOW_TO_SELL, PATH_PAYMENTS, PATH_PRIVACY_POLICY, PATH_RETURNS, PATH_SECURITY, PATH_TERM_OF_USE } from '@/src/shared/consts/paths';
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
      <span className={style.title}>{el.title}</span>
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
    link: PATH_PAYMENTS,
  },
  {
    id: 3,
    title: 'Доставка',
    link: PATH_DELIVERY,
  },
  {
    id: 4,
    title: 'Возврат товара',
    link: PATH_RETURNS,
  },
  {
    id: 5,
    title: 'Пользователское соглашение',
    link: PATH_TERM_OF_USE,
  },
];
const seller: TInfoSidebar[] = [
  {
    id: 6,
    title: 'О нас',
    link: PATH_ABOUT,
  },
  {
    id: 7,
    title: 'Как открыть магазин',
    link: PATH_HOW_TO_OPEN_SHOP,
  },
  {
    id: 8,
    title: 'Как продавать на маркетплейсе',
    link: PATH_HOW_TO_SELL,
  },
  {
    id: 9,
    title: 'Безопасность',
    link: PATH_SECURITY,
  },
  {
    id: 10,
    title: 'Политика конфиденциальности',
    link: PATH_PRIVACY_POLICY,
  },
];
