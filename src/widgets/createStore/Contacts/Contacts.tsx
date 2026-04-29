import { InputFormController, PatterFormatController } from '@/src/shared/ui/form/Controllers';
import { Control, FieldErrors } from 'react-hook-form';
import { TFormValues } from '../zod/zod';

import style from './style.module.scss';

interface ContactsProps {
  control: Control<TFormValues>;
  errors?: FieldErrors<TFormValues>;
}

const ContactsView = ({ control, errors }: ContactsProps) => {
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

export default ContactsView;
