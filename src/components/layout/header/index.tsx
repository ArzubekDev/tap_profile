'use client';

import { Input } from 'antd';

import {
  IconLocation,
  IconSearchTap,
} from '@/src/components/Icons';

import style from './style.module.scss';
import CatalogButton from '@/src/shared/ui/CatalogButton/CatalogButton';
import ProfileUI from '@/src/shared/ui/ProfileUI/ProfileUI';
import FavoriteUI from '@/src/shared/ui/FavoriteUI/FavoriteUI';
import KorzinaUI from '@/src/shared/ui/KorzinaUI/KorzinaUI';
import CreateStoreUI from '@/src/shared/ui/CreateStoreUI/CreateStoreUI';
import TapLogo from '@/src/shared/ui/TapLogo/TapLogo';

const Header = () => {

  return (
    <header className={style.header}>
      <div className={`container ${style.headerContainer}`}>
        {/* Логотип */}
        <TapLogo/>
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
         <ProfileUI/>
          {/* Избранное */}
          <FavoriteUI/>
          {/* Корзина */}
         <KorzinaUI/>
        </div>
       <CreateStoreUI/>
      </div>
    </header>
  );
};

export default Header;
