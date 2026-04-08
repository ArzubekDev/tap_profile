'use client';
import { Button, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import style from './style.module.scss';
import { TProfileFormValues } from './type';

const ProfileForm = () => {
  // useForm
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TProfileFormValues>({
    defaultValues: {
      name: '',
      surname: '',
      number: '',
    },
  });

  const onSubmit = async (data: TProfileFormValues) => {
      console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.profileForm}>
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
            <Controller
              name="name"
              control={control}
              rules={{ required: 'Напишите Имя!' }}
              render={({ field }) => (
                <Input
                  {...field}
                  id="name"
                  type="text"
                  placeholder="Имя"
                  maxLength={150}
                  status={errors.name ? 'error' : ''}
                />
              )}
            />
            {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
          </div>

          <div className={style.profileForm__top__input__block}>
            <label className={style.label} htmlFor="surname">
              Фамилия
            </label>
            <Controller
              name="surname"
              control={control}
              rules={{ required: 'Напишите Фамилию!' }}
              render={({ field }) => (
                <Input
                  {...field}
                  id="surname"
                  type="text"
                  placeholder="Фамилия"
                  maxLength={150}
                  status={errors.surname ? 'error' : ''}
                />
              )}
            />
            {errors.surname && <span style={{ color: 'red' }}>{errors.surname.message}</span>}
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
          <Controller
            name="number"
            control={control}
            rules={{
              required: 'Напишите номер!',
              pattern: {
                value: /^\+?[0-9]{10,15}$/,
                message: 'Неверный формат',
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                id="phone"
                type="text"
                placeholder="Телефон номер"
                maxLength={150}
                status={errors.number ? 'error' : ''}
              />
            )}
          />
          {errors.number && <span style={{ color: 'red' }}>{errors.number.message}</span>}
        </div>
        <Button type="primary" htmlType='submit'>Изменить телефон номер</Button>
      </div>
    </form>
  );
};

export default ProfileForm;
