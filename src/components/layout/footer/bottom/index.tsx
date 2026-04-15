import Link from 'next/link';
import style from '../style.module.scss';

const FooterBottom = () => {
  return (
    <div className="container">
      <div className={style.bottom}>
        <p>Tap.kg © Все права защищены.</p>
        <p>Разработка сайтов и мобильных приложений - <Link href={"#"}>Sunrisestudio.pro</Link></p>
      </div>
    </div>
  );
};

export default FooterBottom;
