'use client';
import { Select, SelectProps } from 'antd';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import style from './style.module.scss'; // Стилдериңиз

interface SelectFormControllerProps<T extends FieldValues> extends Omit<SelectProps, 'name'> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  error?: string;
}

const SelectFormController = <T extends FieldValues>({
  name,
  control,
  label,
  ...props
}: SelectFormControllerProps<T>) => {
  return (
    <div className={style.innerTop}>
      {label && <label className={style.label} htmlFor={props.id}>{label}</label>}
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
            {error && (
              <span style={{ color: '#ff4d4f', fontSize: '12px' }}>
                {error.message}
              </span>
            )}
          </>
        )}
      />
    </div>
  );
};

export default SelectFormController;