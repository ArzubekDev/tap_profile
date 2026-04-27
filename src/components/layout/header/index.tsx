'use client';

import { Input } from 'antd';

import TapLogo from '@/src/shared/ui/TapLogo/TapLogo';
import CatalogButton from '@/src/shared/ui/CatalogButton/CatalogButton';
import ProfileUI from '@/src/shared/ui/ProfileButton/ProfileButton';
import FavoriteUI from '@/src/shared/ui/FavoriteButton/FavoriteButton';
import KorzinaUI from '@/src/shared/ui/KorzinaButton/KorzinaButton';
import CreateStoreUI from '@/src/shared/ui/CreateStoreButton/CreateStoreButton';

import {
  IconLocation,
  IconSearchTap,
} from '@/src/components/Icons';

import style from './style.module.scss';

const HeaderView = () => {

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

export default HeaderView;
