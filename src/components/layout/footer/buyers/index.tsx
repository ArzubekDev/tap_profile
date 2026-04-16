import Link from 'next/link';
import { BlockProps } from '../type';
import { PATH_HOW_TO_MAKE_ORDER } from '@/src/shared/consts/paths';
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
    link: '#'
  },
  {
    title: 'Доставка',
    link: '#'
  },
  {
    title: 'Возврат товаров',
    link: '#'
  },
  {
    title: 'Пользовательское соглашение',
    link: '#'
  },
];
