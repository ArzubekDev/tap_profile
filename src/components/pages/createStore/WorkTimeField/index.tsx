'use client';
import { Controller, useWatch, Control, UseFormSetValue } from 'react-hook-form';

import { Checkbox, TimePicker } from 'antd';
import dayjs from 'dayjs';

import { TFormValues } from '../zod/zod';

import style from './style.module.scss';

interface WorkTimeFieldProps {
  control: Control<TFormValues>;
  setValue: UseFormSetValue<TFormValues>;
  errors: any;
}

const WorkTimeField = ({ control, setValue, errors }: WorkTimeFieldProps) => {
  // useWatch бул жерде бир гана ушул компонентти ререндер кылат
  const isEverydayChecked = useWatch({
    control,
    name: 'isEveryday',
  });

  return (
    <div className={style.time}>
      {/* Время работы */}
      <div className={style.work}>
        <div className={style.timeTitle}>
          <h5 className={style.contentName}>Время работы *</h5>
          <p className={style.contentText}>
            Интервал приёма заказов. <br /> Отметьте «Круглосуточно», если без выходных 24/7.
          </p>
        </div>

        <Controller
          name="workingHours"
          control={control}
          render={({ field }) => (
            <TimePicker.RangePicker
              {...field}
              format="HH:mm"
              disabled={isEverydayChecked}
              status={errors.workingHours ? 'error' : ''}
            />
          )}
        />
      </div>

      {/* Режим */}
      <div className={style.workInfo}>
        <h5 className={style.contentName}>Режим</h5>
        <p className={style.contentText}>
          При «Круглосуточно» время сбросится на 00:00–00:00.
        </p>
      </div>

      {/* Круглосуточно */}
      <div className={style.day}>
        <Controller
          name="isEveryday"
          control={control}
          render={({ field: { value, onChange, ...field } }) => (
            <Checkbox
              {...field}
              checked={value}
              onChange={(e) => {
                const checked = e.target.checked;
                onChange(checked);

                if (checked) {
                  setValue('workingHours', [
                    dayjs('00:00', 'HH:mm'),
                    dayjs('00:00', 'HH:mm'),
                  ]);
                } else {
                  setValue('workingHours', [
                    dayjs('09:00', 'HH:mm'),
                    dayjs('18:00', 'HH:mm'),
                  ]);
                }
              }}
              className={style.checkbox}
            />
          )}
        />
        Круглосуточно
      </div>
    </div>
  );
};

export default WorkTimeField;