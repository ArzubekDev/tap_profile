'use client';
import { IconEdit, IconUploadImg } from '@/components/Icons';
import { Button, Form, Input, TimePicker } from 'antd';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TAddress, TFormValues } from './type';

import dayjs from 'dayjs';
import dynamic from 'next/dynamic';

import style from './style.module.scss';

const AddressPicker = dynamic(() => import('@/shared/ui/AddressPicker/AddressPicker'), {
  ssr: false,
});

const format = 'HH:mm:ss';

// Компонент CreateStore
const CreateStore = () => {
  const [mounted, setMounted] = useState(false);
  const [form] = Form.useForm();
  //useForm
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>({
    defaultValues: {
      storeName: '',
      workingHours: [dayjs('09:00', 'HH:mm'), dayjs('18:00', 'HH:mm')],
    },
  });

  const [location, setLocation] = useState<TAddress>({
    address: '',
    coords: [],
  });

  const onSubmit = (data: any) => {
    console.log('CreateStore:', data);
  };

  const onFinish = (values: any) => {
    const finalData = {
      ...values,
      address: location.address,
      latitude: location.coords[0],
      longitude: location.coords[1],
    };
    console.log(finalData);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className={style.createStore}>
      <h2 className={style.title}>Создать магазин</h2>
      {/* Главный контейнер */}
      <div className={style.formContainer}>
        {/* (Верхний часть) 4 инпута и время работы */}
        <div className={style.formContent}>
          {/* Логотип */}
          <div className={style.logo}>
            <div className={style.content}>
              <label className={style.contentName}>Логотип</label>
              <p className={style.contentText}>
                Квадратное изображение 1:1. <br /> Показывается в карточке магазина.
              </p>
            </div>
            <div className={style.uploadContainer}>
              <IconUploadImg className={style.iconUpload} />
              <span className={style.editContainer}>
                <IconEdit className={style.editIcon} />
              </span>
            </div>
          </div>
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
                    placeholder="Название магазина"
                    status={errors.storeName ? 'error' : ''}
                  />
                )}
              />
              {errors.storeName && <span style={{ color: 'red' }}>{errors.storeName.message}</span>}
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
                  rules={{ required: 'Напишите номер телефона!' }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="phone"
                      placeholder="+996"
                      status={errors.storeName ? 'error' : ''}
                      required
                    />
                  )}
                />
                {errors.storeName && (
                  <span style={{ color: 'red' }}>{errors.storeName.message}</span>
                )}
              </div>
              {/* WhatsApp */}
              <div className={style.info}>
                <div className={style.content}>
                  <label htmlFor="whatsapp" className={style.contentName}>
                    WhatsApp
                  </label>
                  <p className={style.contentText}>Номер для чата</p>
                </div>
                <Input id="whatsapp" placeholder="+996" required />
              </div>
              {/* Instagram */}
              <div className={style.info}>
                <div className={style.content}>
                  <label htmlFor="instagram" className={style.contentName}>
                    Instagram
                  </label>
                  <p className={style.contentText}>Ник или полная ссылка на профиль.</p>
                </div>
                <Input id="instagram" placeholder="@магазин или URL" required />
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
                  rules={{ required: 'Укажите время работы!' }}
                  render={({ field }) => (
                    <TimePicker.RangePicker
                      {...field}
                      format="HH:mm"
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
                <Input type={'checkbox'} className={style.checkbox} />
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
          <Input id="address" placeholder="Например, улица и дом" required />
        </div>
        {/* Карта */}
        <div className={style.map}>
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item>
              <AddressPicker onAddressSelect={(data) => setLocation(data)} />
            </Form.Item>

            <Button type="primary" htmlType="submit" block size="large">
              Создать магазин
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default CreateStore;
