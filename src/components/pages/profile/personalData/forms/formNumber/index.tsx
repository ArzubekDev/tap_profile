'use client'
import { PatterFormatController } from '@/src/components/form/Controllers';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'antd';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { updateNumber } from './action';
import style from './style.module.scss';
import { ZprofileNumber } from './zod/zod';

const FormNumber = () => {
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
      action={updateNumber}
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

export default FormNumber;
