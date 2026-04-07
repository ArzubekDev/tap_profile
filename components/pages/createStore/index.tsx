import { IconEdit, IconUploadImg } from '@/components/Icons';
import style from './style.module.scss';

const CreateStore = () => {
  return (
    <section>
      <h2 className={style.title}>
          Создать магазин
      </h2>
      <div className={style.logo}>
        <div className={style.content}>
          <h5 className={style.contentName}>Логотип</h5>
          <p className={style.contentText}>Квадратное изображение 1:1. <br /> Показывается в карточке магазина.</p>
        </div>
        <IconUploadImg className={style.iconUpload} />
        <span className={style.editContainer}>
          <IconEdit className={style.editIcon} />
        </span>
      </div>
    </section>
  );
};

export default CreateStore;
