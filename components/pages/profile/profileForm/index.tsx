'use client';
import InputController from '@/components/form/formControllers/inputController';
import PatterFormatController from '@/components/form/formControllers/patternFormatController';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import style from './style.module.scss';
import { ZprofileNameSurName, ZprofileNumber } from './zod';

const ProfileForm = () => {
  const nameForm = useForm({
    resolver: zodResolver(ZprofileNameSurName),
    defaultValues: { name: '', surname: '' },
  });

  const phoneForm = useForm({
    resolver: zodResolver(ZprofileNumber),
    defaultValues: { number: '' },
  });

  const onNameSubmit = (data: any) => console.log('onNameSubmit', data);
  const onPhoneSubmit = (data: any) => console.log('onPhoneSubmit:', data);

  return (
    <div className={style.profileForm}>
      <form onSubmit={nameForm.handleSubmit(onNameSubmit)} className={style.profileForm__top}>
        <div className={style.formHeader}>
          <h3 className={style.profileForm__top__title}>Персональные данные</h3>
          <p className={style.profileForm__top__subtitle}>
            Данные профиля не доступны третьим лицам и используется маркетплейсом только для
            идентификации пользователей
          </p>
        </div>

        <div className={style.profileForm__top__input}>
          <div className={style.profileForm__top__input__block}>
            <InputController
              id="name"
              name="name"
              placeholder="Имя"
              label="Имя"
              control={nameForm.control}
            />
          </div>

          <div className={style.profileForm__top__input__block}>
            <InputController
              id="surname"
              name="surname"
              placeholder="Фамилия"
              label="Фамилия"
              control={nameForm.control}
            />
          </div>
        </div>

        <Button type="primary" htmlType="submit">
          Сохранить изменения
        </Button>
      </form>

      <form onSubmit={phoneForm.handleSubmit(onPhoneSubmit)} className={style.profileForm__bottom}>
        <div className={style.formFooter}>
          <h3 className={style.profileForm__bottom__title}>Номер телефона</h3>
          <p>Смена номера выполняется по коду из SMS</p>
        </div>

        <div className={style.profileForm__bottom__block}>
          <PatterFormatController
            id="number"
            name="number"
            control={phoneForm.control}
            label="Телефон"
          />
        </div>
        <Button type="primary" htmlType="submit">
          Изменить телефон номер
        </Button>
      </form>
    </div>
  );
};

export default ProfileForm;
