'use client';

import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'antd';

import { InputFormController } from '@/src/components/form/Controllers';
import { ZprofileNameSurName } from './zod/zod';
import FormNumber from '../formNumber';

import style from './style.module.scss';
import { updateProfile } from './action';

const ProfileForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(ZprofileNameSurName),
    defaultValues: { name: '', surname: '' },
  });

  const onValid = () => {
    formRef.current?.requestSubmit();
  };

  return (
    <div className={style.profileForm}>
      <form 
        ref={formRef}
        action={updateProfile}
        onSubmit={handleSubmit(onValid)}
        className={style.content}
      >
        <div className={style.header}>
          <h3 className={style.title}>Персональные данные</h3>
          <p className={style.subtitle}>
            Данные профиля не доступны третьим лицам...
          </p>
        </div>

        <div className={style.inputs}>
          <div className={style.inputFormController}>
            <InputFormController
              id="name"
              name="name" 
              placeholder="Имя"
              label="Имя"
              control={control}
            />
          </div>

          <div className={style.inputFormController}>
            <InputFormController
              id="surname"
              name="surname"
              placeholder="Фамилия"
              label="Фамилия"
              control={control}
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