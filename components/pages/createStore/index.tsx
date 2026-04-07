import { IconEdit, IconUploadImg } from '@/components/Icons';
import style from './style.module.scss';

const CreateStore = () => {
  return (
    <section>
      <div className={style.logo}>
        <IconUploadImg className={style.iconUpload} />
        <IconEdit/>
      </div>
    </section>
  );
};

export default CreateStore;
