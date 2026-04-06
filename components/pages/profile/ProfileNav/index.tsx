"use client"
import { IconBell, IconClock, IconDeleteAccount, IconFavorite, IconUser } from '@components/Icons';

import { PATH_BASKET_HISTORY, PATH_FAVORITE, PATH_PROFILE } from '@consts/paths';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from './style.module.scss';
import { TProfileItemType } from './types';
import IconStorePlus from '@/components/Icons/components/IconStorePlus';
import IconLogout from '@/components/Icons/components/IconLogout';

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
              className={cn(style.profileItem, {
                [style.active]: isActive,
              })}
            >
              {el.icon} {el.title}
            </Link>
          );
        })}
      </div>
      <h4 className={cn(style.title, style.secondTitle)}>Мои магазины</h4>
      <div>
        {storeItems.map((el) => (
          <Link className={style.profileItem} href={el.link} key={el.id}>{el.icon} {el.title}</Link>
        ))}
      </div>
      <button className={style.logout}><IconLogout className={style.logoutIcon}/> Выход</button>
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
    link: '#',
  },
];

const storeItems: TProfileItemType[] = [
  {
    id: 1, 
    icon: <IconStorePlus/>,
    title: 'Создат магазин',
    link: "#"
  }
]
