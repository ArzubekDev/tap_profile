import { IconCheck } from '@/src/components/Icons';
import style from '../style.module.scss';

const DeleteOptions = () => {
  return (
    <div className={style.content}>
      <h3 className={style.contentTitle}>При удалении аккаунта будут безвозвратно стерты:</h3>
      {options.map((el) => (
        <h5 key={el.id} className={style.contentInfo}>
          <span>{el.icon}</span>
          <span>{el.title}</span>
        </h5>
      ))}
    </div>
  );
};

export default DeleteOptions;

const options = [
  {
    id: 1,
    title: 'История ваших покупок',
    icon: <IconCheck className={style.iconCheck} />,
  },
  {
    id: 2,
    title: 'Номер телефона',
    icon: <IconCheck className={style.iconCheck} />,
  },
  {
    id: 3,
    title: 'Уведомления и ФИО',
    icon: <IconCheck className={style.iconCheck} />,
  },
  {
    id: 4,
    title: 'Пол и адрес проживания',
    icon: <IconCheck className={style.iconCheck} />,
  },
];
