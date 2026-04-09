'use client';
import { Select } from 'antd';
import { Controller, FieldValues } from 'react-hook-form';
import style from './style.module.scss'; // Стилдериңиз
import { SelectFormControllerProps } from './type';


const SelectFormController = <T extends FieldValues>({
  name,
  text,
  control,
  label,
  ...props
}: SelectFormControllerProps<T>) => {
  return (
    <div className={style.innerTop}>
      <div className={style.content}>
        <label className={style.contentName}>{label}</label>
        <p className={style.contentText}>{text}</p>
      </div>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Select
              {...field}
              {...props}
              status={error ? 'error' : props.status}
              style={{ width: '100%' }}
            />
            {error && <span style={{ color: '#ff4d4f', fontSize: '12px' }}>{error.message}</span>}
          </>
        )}
      />
    </div>
  );
};

export default SelectFormController;
