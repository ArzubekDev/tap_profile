import {
  IconCart,
  IconCatalog,
  IconFavorite,
  IconLocation,
  IconSearchTap,
  IconStore,
  IconUser,
  TapLogo,
} from '@/components/Icons';
import { PATH_CREATE_SHOP } from '@/shared/consts/paths';
import profileMenuContent from '@/shared/ui/Dropdown';
import { Input } from 'antd';
import Link from 'next/link';
import PopoverLayout from '../popover/PopoverLayout';
import style from './style.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={`container ${style.headerContainer}`}>
        {/* Логотип */}
        <TapLogo className={style.tapLogo} />
        <div className={style.navContainer}>
          {/* Каталог */}
          <button className={style.buttonCatalog}>
            <IconCatalog />
            <span className={style.buttonCatalogText}>Каталог</span>
          </button>
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
