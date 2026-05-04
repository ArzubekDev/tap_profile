'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'antd';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

import { PatterFormatController } from '@/src/shared/ui/form/Controllers';
;

import style from './style.module.scss';
import { ZprofileNumber } from '../zod/zod';
import { updateNumber } from '../action/action';

export const FormNumber: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const phoneForm = useForm({
    resolver: zodResolver(ZprofileNumber),
    defaultValues: { number: '' },
  });

  const onValid = () => {
    formRef.current?.requestSubmit();
  };

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await updateNumber(formData);
      }}
      onSubmit={phoneForm.handleSubmit(onValid)}
      className={style.numberPhone}
    >
      <div className={style.content}>
        <h3 className={style.title}>Номер телефона</h3>
        <p>Смена номера выполняется по коду из SMS</p>
      </div>

      <div className={style.input}>
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
  );
};


