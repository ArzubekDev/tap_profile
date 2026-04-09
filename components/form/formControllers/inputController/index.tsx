'use client';
import { Input } from 'antd';
import { Controller, FieldValues, } from 'react-hook-form';

import style from './style.module.scss';
import { InputControllerProps } from './type';

const InputController = <T extends FieldValues>({
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

export default InputController;
