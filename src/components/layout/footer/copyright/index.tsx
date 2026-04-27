import Link from 'next/link';
import style from '../style.module.scss';

const FooterCopyRight = () => {
  return (
    <div className="container">
      <div className={style.bottom}>
        <p>Tap.kg © Все права защищены.</p>
        <p>
          Разработка сайтов и мобильных приложений -
          <Link
            href={'https://sunrisestudio.pro'}
            target="_blank"
            rel="noopener noreferrer"
            className={style.sunrise}
          >
            Sunrisestudio.pro
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FooterCopyRight;
