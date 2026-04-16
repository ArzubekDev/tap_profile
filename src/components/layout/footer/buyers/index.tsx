import Link from 'next/link';
import { BlockProps } from '../type';
import { PATH_DELIVERY, PATH_HOW_TO_MAKE_ORDER, PATH_PAYMENTS, PATH_RETURNS, PATH_TERM_OF_USE } from '@/src/shared/consts/paths';
import style from '../style.module.scss';

const Buyers = () => {
  return (
    <div className={style.block}>
      <h5 className={style.title}>Покупателям</h5>
      {buyers.map((el, idx) => (
        <Link href={el.link} className={style.subtitle} key={idx}>{el.title}</Link>
      ))}
    </div>
  );
};

export default Buyers;



const buyers: BlockProps[] = [
  {
    title: 'Как сделать заказ',
    link: PATH_HOW_TO_MAKE_ORDER
  },
  {
    title: 'Как оплатить',
    link: PATH_PAYMENTS
  },
  {
    title: 'Доставка',
    link: PATH_DELIVERY
  },
  {
    title: 'Возврат товаров',
    link: PATH_RETURNS
  },
  {
    title: 'Пользовательское соглашение',
    link: PATH_TERM_OF_USE
  },
];
