import { IconEdit, IconUploadImg } from '@/components/Icons';
import { Input } from 'antd';
import style from './style.module.scss';
import Time from '@/shared/ui/Time';

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
                  <label htmlFor="phone" className={style.contentName}>Телефон</label>
                  <p className={style.contentText}>Публичный номер для связи с магазином.</p>
                </div>
                <Input id='phone' placeholder="+996" />
              </div>
              {/* WhatsApp */}
              <div className={style.info}>
                <div className={style.content}>
                  <label htmlFor="whatsapp" className={style.contentName}>WhatsApp</label>
                  <p className={style.contentText}>Номер для чата</p>
                </div>
                <Input id='whatsapp' placeholder="+996" />
              </div>
              {/* Instagram */}
              <div className={style.info}>
                <div className={style.content}>
                  <label htmlFor="instagram" className={style.contentName}>Instagram</label>
                  <p className={style.contentText}>Ник или полная ссылка на профиль.</p>
                </div>
                <Input id='instagram' placeholder="@магазин или URL" />
              </div>
            </div>
            <div className={style.time}>
             <div className={style.work}>
               <div className={style.tiemTitle}>
                <h5 className={style.contentName}>
                Время работы *
              </h5>
              <p className={style.contentText}>Интервал приёма заказов. Отметьте «Круглосуточно», если без выходных 24/7.</p>
              </div>
              <Time/>
             </div>
             <div className={style.workInfo}>
              <h5 className={style.contentName}>Режим</h5>
              <p className={style.contentText}>При «Круглосуточно» время сбросится на 00:00–00:00.</p>
             </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreateStore;
