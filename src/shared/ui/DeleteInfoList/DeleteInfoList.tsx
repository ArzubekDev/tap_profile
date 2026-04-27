import { IconCheck } from '@/src/components/Icons';
import style from './style.module.scss';

const DeleteInfoList = () => {
  return (
    <div className={style.content}>
      <h3 className={style.contentTitle}>При удалении аккаунта будут безвозвратно стерты:</h3>
      {list?.length && (
        <ul className={style.list}>
          {list.map((el, idx) => (
            <li key={idx} className={style.listItem}>
              <IconCheck className={style.iconCheck} />
              <span className={style.text}>{el.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DeleteInfoList;

const list = [
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
