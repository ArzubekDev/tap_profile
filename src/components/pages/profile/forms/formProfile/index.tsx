'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'antd';

import { InputFormController } from '@/src/components/form/Controllers';
import { ZprofileNameSurName } from './zod/zod';
import FormNumber from '../formNumber';

import style from './style.module.scss';

const ProfileForm = () => {
  const nameForm = useForm({
    resolver: zodResolver(ZprofileNameSurName),
    defaultValues: { name: '', surname: '' },
  });

  const onNameSubmit = (data: any) => console.log('onNameSubmit', data);

  return (
    <div className={style.profileForm}>
      <form onSubmit={nameForm.handleSubmit(onNameSubmit)} className={style.content}>
        <div className={style.header}>
          <h3 className={style.title}>Персональные данные</h3>
          <p className={style.subtitle}>
            Данные профиля не доступны третьим лицам и используется маркетплейсом только для
            идентификации пользователей
          </p>
        </div>

        <div className={style.inputs}>
          <div className={style.inputFormController}>
            <InputFormController
              id="name"
              name="name"
              placeholder="Имя"
              label="Имя"
              control={nameForm.control}
            />
          </div>

          <div className={style.inputFormController}>
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
      <FormNumber />
    </div>
  );
};

export default ProfileForm;
