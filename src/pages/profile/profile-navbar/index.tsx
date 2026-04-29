'use client';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import {
  PATH_BASKET_HISTORY,
  PATH_CREATE_SHOP,
  PATH_DELETE_ACCOUNT,
  PATH_FAVORITE,
  PATH_PROFILE,
} from '@/src/shared/consts/paths';
import {
  IconBell,
  IconClock,
  IconDeleteAccount,
  IconFavorite,
  IconLogout,
  IconStorePlus,
  IconUser,
} from '@/src/shared/ui/Icons';
import { TProfileItemType } from './types';

import style from './style.module.scss';

const ProfileNavbar: React.FC = () => {
  const pathname = usePathname();

  const renderLink = (item: TProfileItemType) => {
    const isActive =
      item.link === PATH_PROFILE
        ? pathname === item.link
        : pathname === item.link || pathname.startsWith(item.link + '/');

    return (
      <Link
        href={item.link}
        key={item.id}
        className={cn(style.profileItem, {
          [style.active]: isActive,
        })}
      >
        {item.icon} <span className={style.profileTitle}>{item.title}</span>
      </Link>
    );
  };

  return (
    <aside className={style.profileNavContainer}>
      <div className={style.myProfile}>
        <h4 className={style.title}>Мой профиль</h4>
        <div className={style.container}>{profileItems.map(renderLink)}</div>
      </div>
      <div className={style.myStores}>
        <h4 className={cn(style.title, style.secondTitle)}>Мои магазины</h4>
        <div>{storeItems.map(renderLink)}</div>
      </div>
      <div className={style.logoutAccount}>
        <h4 className={cn(style.title, style.secondTitle)}>Выйти из аккаунта</h4>
        <button className={style.logout}>
          <IconLogout className={style.logoutIcon} /> Выход
        </button>
      </div>
    </aside>
  );
};

export default ProfileNavbar;

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
    link: PATH_BASKET_HISTORY,
  },
  {
    id: 3,
    icon: <IconFavorite />,
    title: 'Избранные товары',
    link: PATH_FAVORITE,
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
    link: PATH_DELETE_ACCOUNT,
  },
];

const storeItems: TProfileItemType[] = [
  {
    id: 1,
    icon: <IconStorePlus />,
    title: 'Создат магазин',
    link: PATH_CREATE_SHOP,
  },
];
