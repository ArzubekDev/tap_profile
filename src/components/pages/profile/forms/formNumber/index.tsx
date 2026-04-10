import { PatterFormatController } from '@/src/components/form/Controllers'
import style from "./style.module.scss"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZprofileNumber } from './zod/zod';
import { Button } from 'antd';

const FormNumber = () => {

    
  const phoneForm = useForm({
    resolver: zodResolver(ZprofileNumber),
    defaultValues: { number: '' },
  });

  const onPhoneSubmit = (data: any) => console.log('onPhoneSubmit:', data);

  return (
     <form onSubmit={phoneForm.handleSubmit(onPhoneSubmit)} className={style.profileForm__bottom}>
        <div className={style.formFooter}>
          <h3 className={style.profileForm__bottom__title}>Номер телефона</h3>
          <p>Смена номера выполняется по коду из SMS</p>
        </div>

        <div className={style.profileForm__bottom__block}>
          <PatterFormatController
            id="number"
            name="number"
            control={phoneForm.control}
            label="Телефон"
          />
        </div>
        <Button type="primary" htmlType="submit">
          Изменить телефон номер
        </Button>
      </form>
  )
}

export default FormNumber