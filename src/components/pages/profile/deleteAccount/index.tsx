import { Button } from 'antd';
import style from './style.module.scss';
import IconCheck from '@/src/components/Icons/components/IconCheck';

const DeleteAccount = () => {
  return (
    <section className={style.deleteAccount}>
      <h4 className={style.title}>Удаление аккаунта</h4>
      <div className={style.info}>
        <h2 className={style.infoTitle}>Важная информация</h2>
        <p className={style.infoSubTitle}>
          Перед удалением аккаунта ознакомьтесь с данными, которые будут удалены без возможности
          восстановления.
        </p>
      </div>
      <div className={style.content}>
        <h3 className={style.contentTitle}>При удалении аккаунта будут безвозвратно стерты:</h3>
        <h5 className={style.contentInfo}><span><IconCheck/></span>История ваших покупок</h5>
        <h5 className={style.contentInfo}>Номер телефона</h5>
        <h5 className={style.contentInfo}>Уведомления и ФИО</h5>
        <h5 className={style.contentInfo}>Пол и адрес проживания</h5>
      </div>
      <div className={style.footer}>
        <div className={style.footerTextContainer}>
          <h3 className={style.footerTitle}>Служба поддержки</h3>
          <p className={style.footerSubTitle}>Если у вас остались вопросы или возникли трудности или хотите удалить аккаунт:</p>
        </div>
        <Button type='primary'>Написать нам</Button>
      </div>
    </section>
  );
};

export default DeleteAccount;
