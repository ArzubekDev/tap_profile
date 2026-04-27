'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Form } from 'antd';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import dayjs from 'dayjs';
import dynamic from 'next/dynamic';

import WorkTimeField from '@/src/components/pages/createStore/WorkTimeField';
import LogoUpload from '@/src/components/pages/profile/personal-data/forms/LogoUpload';
import Contacts from './contacts';

import { InputFormController } from '@/src/components/form/Controllers';
import { TAddress } from './type';
import { TFormValues, ZcreateStore } from './zod/zod';

import { createStoreAction } from './action';

import style from './style.module.scss';

const AddressPicker = dynamic(
  () => import('@/src/components/pages/createStore/AddressPicker/AddressPicker'),
  {
    ssr: false,
  },
);

const CreateStoreView = () => {
  // Хуки
  const formRef = useRef<HTMLFormElement>(null);
  const [mounted, setMounted] = useState(false);
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TFormValues>({
    resolver: zodResolver(ZcreateStore),
    mode: 'onBlur',
    defaultValues: {
      storeName: '',
      address: '',
      phone: '',
      whatsapp: '',
      instagram: '',
      isEveryday: false,
      workingHours: [dayjs('09:00', 'HH:mm'), dayjs('18:00', 'HH:mm')],
    },
  });

  // Для карты
  const [location, setLocation] = useState<TAddress>({
    address: '',
    coords: [],
  });

  const handleAddressSelect = useCallback((data: TAddress) => {
    setLocation(data);
  }, []);

  // Для отправки Form
  const onFinish = async (data: TFormValues) => {
    const formData = new FormData();

    if (data.logo) {
      formData.append('logo', data.logo);
    }

    formData.append('storeName', data.storeName);
    formData.append('address', location.address);
    formData.append('latitude', location.coords[0].toString());
    formData.append('longitude', location.coords[1].toString());

    try {
      const result = await createStoreAction(formData);
      if (result.success) {
        console.log('Success');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
              <InputFormController
                id="name-store"
                name="storeName"
                label="Название магазина *"
                text="Так покупатели увидят магазин на витрине и в поиске."
                control={control}
                placeholder="Введите название"
              />
            </div>
            {/* Телефон, Ватсап, Инстаграмм */}
            <Contacts control={control} errors={errors} />
            {/* Время работы, Режим, Круглосуточно */}
            <WorkTimeField control={control} setValue={setValue} errors={errors} />
          </div>
        </div>
        {/* Адрес и точка на карте */}
        <div className={style.address}>
          <InputFormController
            id="address"
            name="address"
            label="Адрес и точка на карте *"
            text="Укажите, откуда нам забирать товары — обязательно, даже если у вас своя доставка. Введите адрес в поиске (OpenStreetMap, Кыргызстан) и отметьте точку на карте с номером дома."
            control={control}
            placeholder="Например, улица и дом..."
          />
        </div>
        {/* Карта */}
        <div className={style.map}>
          <Form.Item>
            <AddressPicker onAddressSelect={handleAddressSelect} />
          </Form.Item>

          <Button type="primary" htmlType="submit" block size="large">
            Создать магазин
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default CreateStoreView;
