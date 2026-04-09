'use client';
import { Button, Checkbox, Form, Input, TimePicker } from 'antd';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

import dayjs from 'dayjs';
import dynamic from 'next/dynamic';

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
  const [form] = Form.useForm();
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
                <label className={style.contentName} htmlFor="name-store">
                  Название магазина *
                </label>
                <p className={style.contentText}>
                  Так покупатели увидят магазин на витрине и в поиске.
                </p>
              </div>
              <Controller
                name="storeName"
                control={control}
                rules={{ required: 'Напишите название магазина!' }}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="name-store"
                    placeholder={`${errors.storeName?.message ? 'Напишите название магазина' : 'Название магазина'}`}
                    status={errors.storeName ? 'error' : ''}
                    className={errors.storeName ? style.errorPlaceholder : ''}
                  />
                )}
              />
            </div>
            {/* Телефон, Ватсап, Инстаграмм */}
            <div className={style.contacts}>
              {/* Телефон */}
              <div className={style.info}>
                <div className={style.content}>
                  <label htmlFor="phone" className={style.contentName}>
                    Телефон
                  </label>
                  <p className={style.contentText}>Публичный номер для связи с магазином.</p>
                </div>
                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: 'Номер телефона обязательный!' }}
                  render={({ field: { onChange, value, ...field } }) => (
                    <PatternFormat
                      {...field}
                      format="+996 (###) ## ## ##"
                      mask="_"
                      placeholder={`${errors.phone?.message ? errors.phone.message : '+996 (___) __ __ __'}`}
                      customInput={Input}
                      status={errors.phone ? 'error' : ''}
                      value={value}
                      className={errors.phone ? style.errorPlaceholder : ''}
                      onValueChange={(values) => {
                        onChange(values.formattedValue);
                      }}
                      allowEmptyFormatting={false}
                    />
                  )}
                />
              </div>
              {/* WhatsApp */}
              <div className={style.info}>
                <div className={style.content}>
                  <label htmlFor="whatsapp" className={style.contentName}>
                    WhatsApp
                  </label>
                  <p className={style.contentText}>Номер для чата</p>
                </div>
                <Controller
                  name="whatsapp"
                  control={control}
                  rules={{ required: 'Напишите Ватсап номер!' }}
                  render={({ field: { onChange, value, ...field } }) => (
                    <PatternFormat
                      {...field}
                      format="+996 (###) ## ## ##"
                      mask="_"
                      placeholder={`${errors.whatsapp?.message ? errors.whatsapp.message : '+996 (___) __ __ __'}`}
                      customInput={Input}
                      className={errors.whatsapp ? style.errorPlaceholder : ''}
                      status={errors.whatsapp ? 'error' : ''}
                      value={value}
                      onValueChange={(values) => {
                        onChange(values.formattedValue);
                      }}
                      allowEmptyFormatting={false}
                    />
                  )}
                />
              </div>
              {/* Instagram */}
              <div className={style.info}>
                <div className={style.content}>
                  <label htmlFor="instagram" className={style.contentName}>
                    Instagram
                  </label>
                  <p className={style.contentText}>Ник или полная ссылка на профиль.</p>
                </div>
                <Controller
                  name="instagram"
                  control={control}
                  rules={{ required: 'Вставьте ссылку или название магазина' }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="instagram"
                      className={errors.instagram ? style.errorPlaceholder : ''}
                      placeholder={`${errors.instagram?.message ? errors.instagram.message : '@магазин или URL'}`}
                      status={errors.instagram ? 'error' : ''}
                    />
                  )}
                />
              </div>
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
          <div className={style.addressContent}>
            <label htmlFor="address" className={style.contentName}>
              Адрес и точка на карте *
            </label>
            <p className={style.contentText}>
              Укажите, откуда нам забирать товары — обязательно, даже если у вас своя доставка.
              Введите адрес в поиске (OpenStreetMap, Кыргызстан) и отметьте точку на карте с номером
              дома.
            </p>
          </div>
          <Controller
            name="address"
            control={control}
            rules={{ required: 'Укажите адрес!' }}
            render={({ field }) => (
              <Input
                {...field}
                id="address"
                className={errors.address ? style.errorPlaceholder : ''}
                placeholder={`${errors.address?.message ? errors.address.message : 'Например, улица и дом'}`}
                status={errors.address ? 'error' : ''}
              />
            )}
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
