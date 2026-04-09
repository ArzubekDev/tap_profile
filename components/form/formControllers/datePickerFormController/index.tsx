'use client';
import { DatePicker, DatePickerProps } from 'antd';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import style from './style.module.scss';
import dayjs from 'dayjs';

interface DatePickerFormControllerProps<T extends FieldValues> extends Omit<DatePickerProps, 'name'> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
}

const DatePickerFormController = <T extends FieldValues>({
  name,
  control,
  label,
  ...props
}: DatePickerFormControllerProps<T>) => {
  return (
    <div className={style.innerBottom}>
      {label && <label className={style.label}>{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, ...field }, fieldState: { error } }) => (
          <>
            <DatePicker
              {...field}
              {...props}
              // Эгер маани болсо, аны dayjs объектине айлантабыз (Ant Design үчүн)
              value={value ? dayjs(value) : null}
              // Тандалганда аны форматталган string катары сактайбыз
              onChange={(date) => {
                onChange(date ? date.format('YYYY-MM-DD') : null);
              }}
              status={error ? 'error' : props.status}
              style={{ width: '100%' }}
            />
            {error && (
              <span style={{ color: '#ff4d4f', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                {error.message}
              </span>
            )}
          </>
        )}
      />
    </div>
  );
};

export default DatePickerFormController;