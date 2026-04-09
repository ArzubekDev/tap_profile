'use client';
import { Input } from 'antd';
import { Controller, FieldValues, } from 'react-hook-form';

import { InputControllerProps } from './type';
import style from './style.module.scss';
import { memo } from 'react';

const InputFormController = <T extends FieldValues>({
  id,
  name,
  control,
  label,
  placeholder,
  text,
  error,
  ...props
}: InputControllerProps<T>) => {
  return (
    <div className={style.nameStore}>
      <div className={style.content}>
        <label className={style.contentName} htmlFor={id}>
          {label}
        </label>
        <p className={style.contentText}>{text}</p>
      </div>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error: fieldError } }) => (
          <>
            <Input
              id={id}
              {...field}
              {...props}
              status={fieldError ? 'error' : props.status}
              placeholder={fieldError ? fieldError.message : placeholder}
              className={fieldError ? style.errorPlaceholder : ''}
            />
           
          </>
        )}
      />
    </div>
  );
};

export default InputFormController
