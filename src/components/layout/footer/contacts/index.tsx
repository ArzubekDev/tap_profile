import { IconMessage } from '@/src/components/Icons';
import style from '../style.module.scss';

const Contacts = () => {
  return (
    <div className={style.block}>
      <h5 className={style.title}>Контакты</h5>
      {contacts.map((el, idx) => (
        <h6 key={idx} className={style.subtitle}>
          {el.title}
        </h6>
      ))}
    </div>
  );
};

export default Contacts;

const contacts = [

  {
    title: 'info@tap.kg',
    icon: <IconMessage />,
  },
  {
    title: '0504 71 71 13',
    icon: <IconMessage />,
  },
  {
    title: 'Instagram',
    icon: <IconMessage />,
  },
];
