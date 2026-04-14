import { Button } from 'antd';
import { IconMessage } from '@/src/components/Icons';
import style from './style.module.scss';
import DeleteOptions from './options';

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
      <DeleteOptions/>
      <div className={style.footer}>
        <div className={style.footerTextContainer}>
          <h3 className={style.footerTitle}>Служба поддержки</h3>
          <p className={style.footerSubTitle}>
            Если у вас остались вопросы или возникли трудности или хотите удалить аккаунт:
          </p>
        </div>
        <Button type="primary" className={style.button}><IconMessage className={style.iconMessage}/>Написать нам</Button>
      </div>
    </section>
  );
};

export default DeleteAccount;
