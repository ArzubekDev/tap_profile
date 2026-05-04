'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'antd';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

import { InputFormController } from '@/src/shared/ui/form/Controllers';
import { updateProfile } from '../action/action';
import { ZprofileNameSurName } from '../zod/zod';

import style from './style.module.scss';

export const FormNameSurName: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(ZprofileNameSurName),
    defaultValues: { name: '', surname: '' },
  });

  const onValid = () => {
    formRef.current?.requestSubmit();
  };

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await updateProfile(formData);
      }}
      onSubmit={handleSubmit(onValid)}
      className={style.formProfile}
    >
      <div className={style.header}>
        <h3 className={style.title}>Персональные данные</h3>
        <p className={style.subtitle}>Данные профиля не доступны третьим лицам...</p>
      </div>

      <div className={style.inputs}>
        <div className={style.inputFormController}>
          <InputFormController
            id="user_name"
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
  );
};

