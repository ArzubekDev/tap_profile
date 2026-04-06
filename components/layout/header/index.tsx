import { IconFavorite, IconUser } from '@/components/Icons';
import IconCart from '@/components/Icons/components/IconCart';
import IconCatalog from '@/components/Icons/components/IconCatalog';
import IconLocation from '@/components/Icons/components/IconLocation';
import IconSearchTap from '@/components/Icons/components/IconSearchTap';
import IconStore from '@/components/Icons/components/IconStore';
import TapLogo from '@/components/Icons/components/TapLogo';
import { Input } from 'antd';
import PopoverLayout from '../popover/PopoverLayout';
import style from './style.module.scss';

const Header = () => {
  const profileMenuContent = (
    <div className={style.profileDropdownMenu}>
      <a href="/accounts/profile">Мой профиль</a>
      <a href="/basket/history">История заказов</a>
      <a href="/basket/favorite-list">Избранные товары</a>
      <hr />
      <button className={style.logoutBtn}>Выйти</button>
    </div>
  );

  return (
    <header className={style.header}>
      <TapLogo className={style.tapLogo} />
      <div className={style.navContainer}>
        <button className={style.buttonCatalog}>
          <IconCatalog />
          <span className={style.buttonCatalogText}>Каталог</span>
        </button>
        <div className={style.headerSearchInput}>
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
        </div>
        <div className={style.locationNav}>
          <IconLocation />
        </div>
        <PopoverLayout
          content={profileMenuContent}
          placement="bottomRight"
          trigger="hover"
          innerClassName={style.profilePopoverContent}
        >
          <div className={style.profileNav}>
            <IconUser className={style.iconUserHeader} />
            <span className={style.profileNavText}>Профиль</span>
          </div>
        </PopoverLayout>
        <div className={style.favoriteNav}>
          <IconFavorite className={style.iconFavoriteHeader} />
          <span className={style.favoriteNavText}>Избранное</span>
        </div>
        <div className={style.cartNav}>
          <IconCart className={style.iconCartHeader} />
          <span className={style.cartNavText}>Корзина</span>
        </div>
      </div>
      <button className={style.createStore}>
        Создать магазин <IconStore />
      </button>
    </header>
  );
};

export default Header;
