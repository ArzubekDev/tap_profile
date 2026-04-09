
'use client';
import { Button, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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
    <div  className={style.profileForm}>
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
            <label className={style.label} htmlFor="name">Имя</label>
            <Controller
              name="name"
              control={nameForm.control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="name"
                  placeholder="Имя"
                  status={nameForm.formState.errors.name ? 'error' : ''}
                />
              )}
            />
          </div>

          <div className={style.profileForm__top__input__block}>
            <label className={style.label} htmlFor="surname">Фамилия</label>
            <Controller
              name="surname"
              control={nameForm.control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="surname"
                  placeholder="Фамилия"
                  status={nameForm.formState.errors.surname ? 'error' : ''}
                />
              )}
            />
          </div>
        </div>

        <Button type="primary" htmlType="submit">Сохранить изменения</Button>
      </form>

      <form onSubmit={phoneForm.handleSubmit(onPhoneSubmit)} className={style.profileForm__bottom}>
        <div className={style.formFooter}>
          <h3 className={style.profileForm__bottom__title}>Номер телефона</h3>
          <p>Смена номера выполняется по коду из SMS</p>
        </div>

        <div className={style.profileForm__bottom__block}>
          <label className={style.label} htmlFor="phone">Телефон</label>
          <Controller
            name="number"
            control={phoneForm.control}
            render={({ field }) => (
              <Input
                {...field}
                id="phone"
                placeholder="Телефон номер"
                status={phoneForm.formState.errors.number ? 'error' : ''}
              />
            )}
          />
        </div>
        <Button type="primary" htmlType="submit">Изменить телефон номер</Button>
      </form>
    </div>
  );
};

export default ProfileForm;
