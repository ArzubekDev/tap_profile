import { IconMessage } from '@/src/shared/ui/Icons';
import { Button } from 'antd';
import React from 'react';

import { DeleteInfoList } from '@/src/shared/ui';

import style from './style.module.scss';

const DeleteAccountView: React.FC = () => {
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
      <DeleteInfoList />
      <div className={style.supportSection}>
        <div className={style.footerTextContainer}>
          <h3 className={style.footerTitle}>Служба поддержки</h3>
          <p className={style.footerSubTitle}>
            Если у вас остались вопросы или возникли трудности или хотите удалить аккаунт:
          </p>
        </div>
        <Button type="primary" className={style.button}>
          <IconMessage className={style.iconMessage} />
          Написать нам
        </Button>
      </div>
    </section>
  );
};

export default DeleteAccountView;
