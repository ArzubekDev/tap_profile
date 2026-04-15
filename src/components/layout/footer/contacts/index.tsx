import Link from 'next/link';

import { IconInstagram, IconMessage, IconPhone } from '@/src/components/Icons';
import { BlockProps } from '../type';

import style from '../style.module.scss';

const Contacts = () => {
  return (
    <div className={style.block}>
      <h5 className={style.title}>Контакты</h5>
      {contacts.map((el, idx) => (
        <Link
          key={idx}
          target="_blank"
          rel="noopener noreferrer"
          href={el.link}
          className={style.subtitle}
        >
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
    link: 'mailto:info@tap.kg',
  },
  {
    title: '0504 71 71 13',
    icon: <IconPhone className={style.icon} />,
    link: 'tel:+996504717113',
  },
  {
    title: 'Instagram',
    icon: <IconInstagram className={style.icon} />,
    link: 'https://www.instagram.com/tap_kg_market/',
  },
];
