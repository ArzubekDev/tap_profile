import style from '../style.module.scss';

const FooterBottom = () => {
  return (
    <div className="container">
      <div className={style.bottom}>
        <p>Tap.kg © Все права защищены.</p>
        <p>Разработка сайтов и мобильных приложений - <span>Sunrisestudio.pro</span></p>
      </div>
    </div>
  );
};

export default FooterBottom;
