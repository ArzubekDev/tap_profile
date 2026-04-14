import style from '../style.module.scss';

const Buyers = () => {
  return (
    <div className={style.block}>
      <h5 className={style.title}>Покупателям</h5>
      {buyers.map((el, idx) => (
        <h6 className={style.subtitle} key={idx}>{el.title}</h6>
      ))}
    </div>
  );
};

export default Buyers;

const buyers = [
  {
    title: 'Как сделать заказ',
  },
  {
    title: 'Как оплатить',
  },
  {
    title: 'Доставка',
  },
  {
    title: 'Возврат товаров',
  },
  {
    title: 'Пользовательское соглашение',
  },
];
