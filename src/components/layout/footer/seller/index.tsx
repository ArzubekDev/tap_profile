import style from '../style.module.scss';

const Seller = () => {
  return (
    <div className={style.block}>
      <h5>Продавцам</h5>
      {seller.map((el, idx) => (
        <h6 key={idx}>{el.title}</h6>
      ))}
    </div>
  );
};

export default Seller;

const seller = [
  {
    title: 'О нас',
  },
  {
    title: 'Как открыть магазин',
  },
  {
    title: 'Как продавать на маркетплейсе',
  },
  {
    title: 'Безопасность',
  },
  {
    title: 'Политика конфиденциальности',
  },
];
