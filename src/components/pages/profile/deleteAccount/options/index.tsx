import { IconCheck } from '@/src/components/Icons';
import style from '../style.module.scss';

const DeleteOptions = () => {
  return (
    <div className={style.content}>
      <h3 className={style.contentTitle}>При удалении аккаунта будут безвозвратно стерты:</h3>
      <ul className={style.list}>
        {options.map((el, idx) => (
          <li key={idx} className={style.listItem}>
            <IconCheck className={style.iconCheck} />
            <span className={style.text}>{el.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteOptions;

const options = [
  {
    title: 'История ваших покупок',
  },
  {
    title: 'Номер телефона',
  },
  {
    title: 'Уведомления и ФИО',
  },
  {
    title: 'Пол и адрес проживания',
  },
];
