import { InputFormController, PatterFormatController } from '@/src/components/form/Controllers';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { TFormValues, ZcreateStore } from '../zod/zod';
import style from './style.module.scss';

const Contacts = () => {
  //useForm
  const {
    control,
    formState: { errors },
  } = useForm<TFormValues>({
    resolver: zodResolver(ZcreateStore),
    mode: 'onBlur',
    defaultValues: {
      phone: '',
      whatsapp: '',
      instagram: '',
    },
  });
  
  return (
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
  );
};

export default Contacts;
