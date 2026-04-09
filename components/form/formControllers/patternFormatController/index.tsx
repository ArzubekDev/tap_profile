'use client';
import { Input } from 'antd';
import { Controller, FieldValues } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

import { PatterFormatControllerProps } from './type';

import style from './style.module.scss';

const PatterFormatController = <T extends FieldValues>({
  id,
  text,
  name,
  control,
  label,
  placeholder = '+996 (___) __ __ __',
}: PatterFormatControllerProps<T>) => {
  return (
    <div className={style.info}>
      <div className={style.content}>
        <label className={style.contentName} htmlFor={id}>
          {label}
        </label>
        <p className={style.contentText}>{text}</p>
      </div>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, ...field }, fieldState: { error } }) => (
          <>
            <PatternFormat
              id={id}
              {...field}
              value={value}
              format="+996 (###) ## ## ##"
              mask="_"
              allowEmptyFormatting={false}
              customInput={Input}
              placeholder={error ? error.message : placeholder}
              status={error ? 'error' : ''}
              className={error ? style.errorPlaceholder : ''}
              onValueChange={(values) => {
                onChange(values.formattedValue);
              }}
            />
          </>
        )}
      />
    </div>
  );
};

export default PatterFormatController;
