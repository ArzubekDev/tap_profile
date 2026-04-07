import { IconEdit, IconUploadImg } from '@/components/Icons';
import Time from '@/shared/ui/Time';
import { Input } from 'antd';
import style from './style.module.scss';

const CreateStore = () => {
  return (
    <section className={style.createStore}>
      <h2 className={style.title}>Создать магазин</h2>
      {/* Главный контейнер */}
      <form className={style.formContainer}>
        {/* (Верхний часть) 4 инпута и время работы */}
        <div className={style.formContent}>
          {/* Логотип */}
          <div className={style.logo}>
            <div className={style.content}>
              <label className={style.contentName}>Логотип</label>
              <p className={style.contentText}>
                Квадратное изображение 1:1. <br /> Показывается в карточке магазина.
              </p>
            </div>
            <div className={style.uploadContainer}>
              <IconUploadImg className={style.iconUpload} />
              <span className={style.editContainer}>
                <IconEdit className={style.editIcon} />
              </span>
            </div>
          </div>
          {/* Все инпуты */}
          <div className={style.formInfo}>
            {/* Инпут (Называние магазина) */}
            <div className={style.nameStore}>
              <div className={style.content}>
                <label className={style.contentName} htmlFor="name-store">
                  Название магазина *
                </label>
                <p className={style.contentText}>
                  Так покупатели увидят магазин на витрине и в поиске.
                </p>
              </div>
              <Input id="name-store" placeholder="Название магазина" required />
            </div>
            {/* Телефон, Ватсап, Инстаграмм */}
            <div className={style.contacts}>
              {/* Телефон */}
              <div className={style.info}>
                <div className={style.content}>
                  <label htmlFor="phone" className={style.contentName}>
                    Телефон
                  </label>
                  <p className={style.contentText}>Публичный номер для связи с магазином.</p>
                </div>
                <Input id="phone" placeholder="+996" />
              </div>
              {/* WhatsApp */}
              <div className={style.info}>
                <div className={style.content}>
                  <label htmlFor="whatsapp" className={style.contentName}>
                    WhatsApp
                  </label>
                  <p className={style.contentText}>Номер для чата</p>
                </div>
                <Input id="whatsapp" placeholder="+996" />
              </div>
              {/* Instagram */}
              <div className={style.info}>
                <div className={style.content}>
                  <label htmlFor="instagram" className={style.contentName}>
                    Instagram
                  </label>
                  <p className={style.contentText}>Ник или полная ссылка на профиль.</p>
                </div>
                <Input id="instagram" placeholder="@магазин или URL" />
              </div>
            </div>
            {/* Время работы, Режим, Круглосуточно */}
            <div className={style.time}>
              {/* Время работы */}
              <div className={style.work}>
                <div className={style.tiemTitle}>
                  <h5 className={style.contentName}>Время работы *</h5>
                  <p className={style.contentText}>
                    Интервал приёма заказов. <br /> Отметьте «Круглосуточно», если без выходных
                    24/7.
                  </p>
                </div>
                <Time />
              </div>
              {/* Режим */}
              <div className={style.workInfo}>
                <h5 className={style.contentName}>Режим</h5>
                <p className={style.contentText}>
                  При «Круглосуточно» время сбросится на 00:00–00:00.
                </p>
              </div>
              {/* Круглосуточно */}
              <div className={style.day}>
                <Input type={'checkbox'} className={style.checkbox} />
                Круглосуточно
              </div>
            </div>
          </div>
        </div>
        {/* Адрес и карта */}
        <div className={style.address}>
         <div className={style.addressContent}>
           <label htmlFor='address' className={style.contentName}>Адрес и точка на карте *</label>
          <p className={style.contentText}>Укажите, откуда нам забирать товары — обязательно, даже если у вас своя доставка. Введите адрес в поиске (OpenStreetMap, Кыргызстан) и отметьте точку на карте с номером дома.</p>
         </div>
          <Input id='address' placeholder='Например, улица и дом'/>
        </div>
      </form>
    </section>
  );
};

export default CreateStore;
