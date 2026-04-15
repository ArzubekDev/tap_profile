import Link from 'next/link';

import { IconMessage } from '@/src/components/Icons';
import { BlockProps } from '../type';

import style from '../style.module.scss';

const Contacts = () => {
  return (
    <div className={style.block}>
      <h5 className={style.title}>Контакты</h5>
      {contacts.map((el, idx) => (
        <Link key={idx} href={el.link} className={style.subtitle}>
          {el.icon}
          {el.title}
        </Link>
      ))}
    </div>
  );
};

export default Contacts;

const contacts: BlockProps[] = [
  {
    title: 'info@tap.kg',
    icon: <IconMessage className={style.icon} />,
    link: '#',
  },
  {
    title: '0504 71 71 13',
    icon: <IconMessage className={style.icon} />,
    link: '#',
  },
  {
    title: 'Instagram',
    icon: <IconMessage className={style.icon} />,
    link: '#',
  },
];
