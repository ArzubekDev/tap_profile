import TapLogo from '@/src/shared/ui/TapLogo/TapLogo';
import style from './style.module.scss';
import Buyers from './buyers';
import Seller from './seller';
import Contacts from './contacts';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.content}>
            {/* TapLogo & Текст */}
          <div className={style.left}>
            <TapLogo />
            <p className={style.text}>
              Tap.kg - маркетплейс, который предоставляет возможность каждому пользователю открыть
              интернет-магазин и получать заказы, даже когда ты спишь. Главная особенность нашей
              платформы открытость. Мы даем возможность магазинам привлекать клиентов с поисковых
              сайтов на ваши товары, а пользователям удобный каталогизированный сервис. Наш поиск по
              товарам даст вам возможность найти, то что вы ищете без головной боли иметь большой
              ассортимент товаров. Наша миссия выводить электронную коммерцию на новый уровень, как
              для покупателей так и для продавцов в Кыргызстане.
            </p>
          </div>
          {/* 3 Блоки: Информация и контакты */}
          <div className={style.informations}>
            {/* Покупателям */}
           <Buyers/>
            {/* Продавцам */}
           <Seller/>
            {/* Контакты */}
           <Contacts/>
          </div>
          {/* QR Code */}
          <div className={style.qrCode}>
            <h6>Наведите камеру и скачайте бесплатное приложение</h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
