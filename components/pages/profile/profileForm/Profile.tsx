import ThemeConfig from '@/shared/theme/themeConfig';
import { Button, Input } from 'antd';
import ProfileOptions from '../ProfileOptions';
import './Profile.scss';

const Profile = () => {
  return (
    <ThemeConfig>
      <section id="profile">
        <div className="container">
          {/* FORM */}
          <div className="profile--form">
            <div className="profile--form__top">
              <h3 className="profile--form__top--title">Персональные данные</h3>
              <p className="profile--form__top--subtitle">
                Данные профиля не доступны третьим лицам и используется маркетплейсом только для
                идентификации пользователей{' '}
              </p>
              <div className="profile--form__top--input">
                <div className="profile--form__top--input__block">
                  <label className="label" htmlFor="name">
                    Имя
                  </label>
                  <Input id="name" type="text" placeholder="Имя" maxLength={150} required />
                </div>
                <div className="profile--form__top--input__block">
                  <label className="label" htmlFor="surname">
                    Фамилия
                  </label>
                  <Input id="surname" type="text" placeholder="Фамилия" maxLength={150} required />
                </div>
              </div>
              <Button type="primary">Сохранит изменение</Button>
            </div>
            <div className="profile--form__bottom">
              <h3 className="profile--form__bottom--title">Номер телефона</h3>
              <p>Смена номера выполняется по коду из SMS </p>
              <div className="profile--form__bottom--block">
                <label className="label" htmlFor="phone">
                  Телефон
                </label>
                <Input
                  id="phone"
                  type="text"
                  placeholder="Телефон номер"
                  maxLength={150}
                  required
                />
              </div>
              <Button type="primary">Изменить телефон номер</Button>
            </div>
          </div>
          {/* OPTIONS */}
          <ProfileOptions />
        </div>
      </section>
    </ThemeConfig>
  );
};

export default Profile;
