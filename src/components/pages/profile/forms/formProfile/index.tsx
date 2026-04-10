'use client';

import { InputFormController } from '@/src/components/form/Controllers';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import style from './style.module.scss';
import { ZprofileNameSurName } from './zod/zod';
import FormNumber from '../formNumber';

const ProfileForm = () => {
  const nameForm = useForm({
    resolver: zodResolver(ZprofileNameSurName),
    defaultValues: { name: '', surname: '' },
  });



  const onNameSubmit = (data: any) => console.log('onNameSubmit', data);

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
            <InputFormController
              id="name"
              name="name"
              placeholder="Имя"
              label="Имя"
              control={nameForm.control}
            />
          </div>

          <div className={style.profileForm__top__input__block}>
            <InputFormController
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
     <FormNumber/>
    </div>
  );
};

export default ProfileForm;
