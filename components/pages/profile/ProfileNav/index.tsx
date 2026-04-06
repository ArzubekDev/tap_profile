import { Button } from 'antd';

import { IconBell, IconClock, IconDeleteAccount, IconFavorite, IconUser } from '@components/Icons';

import { PATH_PROFILE } from '@consts/paths';
import style from './style.module.scss';
import { TProfileItemType } from './types';
import Link from 'next/link';



const ProfileNav = () => {
  return (
    <div className={style.profileNav}> 
      <h4 className={style.title}>Мой профиль</h4>
      <div className={style.container}>
        {profileItems.map((el) => (
            <Link href={el.link} key={el.id} className={style.profilItem}>
              {el.icon} <span className={style.profileTitle}>{el.title}</span>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ProfileNav;

const profileItems: TProfileItemType[] = [
  {
    id: 1,
    icon: <IconUser />,
    title: 'Персональные данные',
    link: PATH_PROFILE,
  },

  {
    id: 2,
    icon: <IconClock />,
    title: 'История заказов',
    link: '/basket/history',
  },
  {
    id: 3,
    icon: <IconFavorite />,
    title: 'Избранные товары',
    link: '/basket/favorite-list',
  },
  {
    id: 4,
    icon: <IconBell />,
    title: 'Уведомление',
    link: '#',
  },
  {
    id: 5,
    icon: <IconDeleteAccount />,
    title: 'Удаление аккаунта',
    link: '/accounts/profile/delete-info',
  },
];