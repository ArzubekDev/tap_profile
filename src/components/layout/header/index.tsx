'use client';

import { Input } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import {
  IconCart,
  IconCatalog,
  IconFavorite,
  IconLocation,
  IconSearchTap,
  IconStore,
  IconUser,
  TapLogo,
} from '@/src/components/Icons';
import PopoverLayout from '../popover/PopoverLayout';

import { PATH_CREATE_SHOP, PATH_HOME } from '@/src/shared/consts/paths';
import profileMenuContent from '@/src/shared/ui/Dropdown';
import style from './style.module.scss';
import CatalogButton from '@/src/shared/ui/CatalogButton/CatalogButton';

const Header = () => {
  const route = useRouter();
  return (
    <header className={style.header}>
      <div className={`container ${style.headerContainer}`}>
        {/* Логотип */}
        <TapLogo onClick={() => route.push(PATH_HOME)} className={style.tapLogo} />
        <div className={style.navContainer}>
          {/* Каталог */}
         <CatalogButton/>
          {/* Search input */}
          <form className={style.searchForm}>
            <IconSearchTap />
            <label htmlFor="search" style={{ width: '100%' }}>
              <Input
                id="search"
                className={style.headerInput}
                placeholder="Поиск товаров"
                maxLength={150}
                variant="borderless"
              />
            </label>
          </form>
          <div className={style.locationNav}>
            <IconLocation />
          </div>
          {/* Профиль */}
          <PopoverLayout
            // content={<div><Link href={}></Link></div>}
            content={profileMenuContent}
            placement="bottomRight"
            trigger="hover"
            innerClassName={style.profilePopoverContent}
          >
            <div className={style.navItem}>
              <IconUser className={style.navItemIcon} />
              <span className={style.navItemText}>Профиль</span>
            </div>
          </PopoverLayout>
          {/* Избранное */}
          <div className={style.navItem}>
            <IconFavorite className={style.navItemIcon} />
            <span className={style.navItemText}>Избранное</span>
          </div>
          {/* Корзина */}
          <div className={style.navItem}>
            <IconCart className={style.navItemIcon} />
            <span className={style.navItemText}>Корзина</span>
          </div>
        </div>
        <Link href={PATH_CREATE_SHOP} className={style.createStore}>
          Создать магазин <IconStore />
        </Link>
      </div>
    </header>
  );
};

export default Header;
