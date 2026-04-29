'use client';

import { Input } from 'antd';

import {
  CatalogButton,
  CreateStoreButton,
  FavoriteButton,
  KorzinaButton,
  ProfileButton,
  TapLogo,
} from '@/src/shared/ui';

import { IconLocation, IconSearchTap } from '@/src/shared/ui/Icons';

import style from './style.module.scss';

const HeaderView = () => {
  return (
    <header className={style.header}>
      <div className={`container ${style.headerContainer}`}>
        {/* Логотип */}
        <TapLogo />
        <div className={style.navContainer}>
          {/* Каталог */}
          <CatalogButton />
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
          <ProfileButton />
          {/* Избранное */}
          <FavoriteButton />
          {/* Корзина */}
          <KorzinaButton />
        </div>
        <CreateStoreButton />
      </div>
    </header>
  );
};

export default HeaderView;
