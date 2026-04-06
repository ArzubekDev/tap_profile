"use client"
import { IconBell, IconClock, IconDeleteAccount, IconFavorite, IconUser } from '@components/Icons';

import { PATH_PROFILE } from '@consts/paths';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from './style.module.scss';
import { TProfileItemType } from './types';

const ProfileNav = () => {
  const pathname = usePathname();

  return (
    <div className={style.profileNav}>
      <h4 className={style.title}>Мой профиль</h4>
      <div className={style.container}>
        {profileItems.map((el) => {
          const isActive = el.link === pathname;
          return (
            <Link
              href={el.link}
              key={el.id}
              className={cn(style.profilItem, {
                [style.active]: isActive,
              })}
            >
              {el.icon} {el.title}
            </Link>
          );
        })}
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

const storeItems: TProfileItemType[] = [
  {
    id: 1, 
    icon: '',
    title: 'Создат магазин',
    link: "#"
  }
]
