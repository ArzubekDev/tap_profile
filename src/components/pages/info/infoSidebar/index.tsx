import Link from 'next/link';
import style from './style.module.scss';

const InfoSidebar = () => {
  return (
    <aside className={style.infoSidebar}>
      <div className={style.block}>
        <h3>Покупателям</h3>
        {buyers.map((el, idx) => (
          <Link key={idx} href={el.link}>
            {el.title}
          </Link>
        ))}
      </div>
      <div className={style.block}>
        <h3>Продавцам</h3>
        {seller.map((el, idx) => (
          <Link key={idx} href={el.link}>
            {el.title}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default InfoSidebar;

const buyers = [
  {
    title: 'Как сделать заказ',
    link: '#',
  },
  {
    title: 'Как оплатить',
    link: '#',
  },
  {
    title: 'Доставка',
    link: '#',
  },
  {
    title: 'Возврат товара',
    link: '#',
  },
  {
    title: 'Пользователское соглашение',
    link: '#',
  },
];
const seller = [
  {
    title: 'О нас',
    link: '#',
  },
  {
    title: 'Как открыть магазин',
    link: '#',
  },
  {
    title: 'Как продавать на маркетплейсе',
    link: '#',
  },
  {
    title: 'Безопасность',
    link: '#',
  },
  {
    title: 'Политика конфиденциальности',
    link: '#',
  },
];
