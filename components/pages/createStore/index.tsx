'use client';
import { Button, Checkbox, Form, TimePicker } from 'antd';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import dayjs from 'dayjs';
import dynamic from 'next/dynamic';

import InputController from '@/components/form/formControllers/inputController';
import PatterFormatController from '@/components/form/formControllers/patternFormatController';
import LogoUpload from '@/shared/ui/LogoUpload';
import { zodResolver } from '@hookform/resolvers/zod';
import style from './style.module.scss';
import { TAddress } from './type';
import { TFormValues, ZcreateStore } from './zod';

const AddressPicker = dynamic(() => import('@/shared/ui/AddressPicker/AddressPicker'), {
  ssr: false,
});

// Компонент CreateStore
const CreateStore = () => {
  // Хуки
  const [mounted, setMounted] = useState(false);
  //useForm
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<TFormValues>({
    resolver: zodResolver(ZcreateStore),
    defaultValues: {
      storeName: '',
      phone: '',
      whatsapp: '',
      instagram: '',
      address: '',
      isEveryday: false,
      workingHours: [dayjs('09:00', 'HH:mm'), dayjs('18:00', 'HH:mm')],
    },
  });
  // Для круглосуточного мониторинга состояния флага.
  const isEverydayChecked = watch('isEveryday');

  // Для карты
  const [location, setLocation] = useState<TAddress>({
    address: '',
    coords: [],
  });

  // Для отправки Form
  const onFinish = (data: TFormValues) => {
    const finalData = {
      ...data,
      address: location.address,
      latitude: location.coords[0],
      longitude: location.coords[1],
    };
    console.log(finalData);
  };

  // Для проверьки круглосуточный (инпут: Checked)
  useEffect(() => {
    if (isEverydayChecked) {
      setValue('workingHours', [dayjs('00:00', 'HH:mm'), dayjs('00:00', 'HH:mm')]);
    } else {
      setValue('workingHours', [dayjs('09:00', 'HH:mm'), dayjs('18:00', 'HH:mm')]);
    }
  }, [isEverydayChecked, setValue]);

  // для TimePicker
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className={style.createStore}>
      <h2 className={style.title}>Создать магазин</h2>
      {/* Главный контейнер */}
      <Form onFinish={handleSubmit(onFinish)} layout="vertical" className={style.formContainer}>
        {/* (Верхний часть) 4 инпута и время работы */}
        <div className={style.formContent}>
          {/* Логотип */}
          <LogoUpload control={control} />
          {/* Все инпуты */}
          <div className={style.formInfo}>
            {/* Инпут (Называние магазина) */}
            <div className={style.nameStore}>
              <div className={style.content}>
                <label className={style.contentName} htmlFor="name-store"></label>
                <p className={style.contentText}></p>
              </div>
              <InputController
                id="name-store"
                name="storeName"
                label="Название магазина *"
                text="Так покупатели увидят магазин на витрине и в поиске."
                control={control}
                placeholder="Введите название"
              />
            </div>
            {/* Телефон, Ватсап, Инстаграмм */}
            <div className={style.contacts}>
              {/* Телефон */}
              <PatterFormatController
                id="phone"
                name="phone"
                text="Публичный номер для связи с магазином."
                control={control}
                label="Телефон"
              />
              {/* WhatsApp */}
              <PatterFormatController
                id="whatsapp"
                name="whatsapp"
                text="Номер для чата"
                control={control}
                label="WhatsApp"
              />
              {/* Instagram */}
              <InputController
                id="instagram"
                name="instagram"
                label="Instagram"
                text="Ник или полная ссылка на профиль."
                control={control}
                placeholder="@магазин или URL"
              />
            </div>
            {/* Время работы, Режим, Круглосуточно */}
            <div className={style.time}>
              {/* Время работы */}
              <div className={style.work}>
                <div className={style.tiemTitle}>
                  <h5 className={style.contentName}>Время работы *</h5>
                  <p className={style.contentText}>
                    Интервал приёма заказов. <br /> Отметьте «Круглосуточно», если без выходных
                    24/7.
                  </p>
                </div>
                <Controller
                  name="workingHours"
                  control={control}
                  rules={{ required: !isEverydayChecked ? 'Укажите время работы!' : false }}
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
                      onChange={(e) => onChange(e.target.checked)}
                      className={style.checkbox}
                    ></Checkbox>
                  )}
                />
                Круглосуточно
              </div>
            </div>
          </div>
        </div>
        {/* Адрес и точка на карте */}
        <div className={style.address}>
          <InputController
            id="instagram"
            name="instagram"
            label="Адрес и точка на карте *"
            text="Укажите, откуда нам забирать товары — обязательно, даже если у вас своя доставка. Введите адрес в поиске (OpenStreetMap, Кыргызстан) и отметьте точку на карте с номером дома."
            control={control}
            placeholder="Например, улица и дом..."
          />
        </div>
        {/* Карта */}
        <div className={style.map}>
          <Form.Item>
            <AddressPicker onAddressSelect={(data) => setLocation(data)} />
          </Form.Item>

          <Button type="primary" htmlType="submit" block size="large">
            Создать магазин
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default CreateStore;
