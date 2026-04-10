'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Form } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import dayjs from 'dayjs';
import dynamic from 'next/dynamic';

import { InputFormController, PatterFormatController } from '@/src/components/form/Controllers';
import LogoUpload from '@/src/shared/ui/LogoUpload';
import WorkTimeField from '@/src/shared/ui/WorkTimeField';
import style from './style.module.scss';
import { TAddress } from './type';
import { TFormValues, ZcreateStore } from './zod/zod';

const AddressPicker = dynamic(() => import('@/src/shared/ui/AddressPicker/AddressPicker'), {
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
    setValue,
    formState: { errors },
  } = useForm<TFormValues>({
    resolver: zodResolver(ZcreateStore),
    mode: 'onBlur',
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

  // Для карты
  const [location, setLocation] = useState<TAddress>({
    address: '',
    coords: [],
  });

  const handleAddressSelect = useCallback((data: TAddress) => {
    setLocation(data);
  }, []);

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
              <InputFormController
                id="instagram"
                name="instagram"
                label="Instagram"
                text="Ник или полная ссылка на профиль."
                control={control}
                placeholder="@магазин или URL"
              />
            </div>
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

export default CreateStore;
