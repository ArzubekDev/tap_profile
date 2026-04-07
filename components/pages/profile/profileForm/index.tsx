'use client';
import { Button, Input } from 'antd';
import style from './style.module.scss';

const ProfileForm = () => {
  return (
    <section className={style.profileForm}>
      <div className={style.profileForm__top}>
        <div className={style.formHeader}>
          <h3 className={style.profileForm__top__title}>Персональные данные</h3>
          <p className={style.profileForm__top__subtitle}>
            Данные профиля не доступны третьим лицам и используется маркетплейсом только для
            идентификации пользователей
          </p>
        </div>
        <div className={style.profileForm__top__input}>
          <div className={style.profileForm__top__input__block}>
            <label className={style.label} htmlFor="name">
              Имя
            </label>
            <Input id="name" type="text" placeholder="Имя" maxLength={150} required />
          </div>

          <div className={style.profileForm__top__input__block}>
            <label className={style.label} htmlFor="surname">
              Фамилия
            </label>
            <Input id="surname" type="text" placeholder="Фамилия" maxLength={150} required />
          </div>
        </div>

        <Button type="primary">Сохранит изменение</Button>
      </div>

      <div className={style.profileForm__bottom}>
<div className={style.formFooter}>
          <h3 className={style.profileForm__bottom__title}>Номер телефона</h3>
        <p>Смена номера выполняется по коду из SMS</p>
</div>

        <div className={style.profileForm__bottom__block}>
          <label className={style.label} htmlFor="phone">
            Телефон
          </label>
          <Input id="phone" type="text" placeholder="Телефон номер" maxLength={150} required />
        </div>

        <Button type="primary">Изменить телефон номер</Button>
      </div>
    </section>
  );
};

export default ProfileForm;
