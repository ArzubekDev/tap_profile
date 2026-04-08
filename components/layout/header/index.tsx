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
import profileMenuContent from '@/shared/ui/Dropdown';
import { Input } from 'antd';
import PopoverLayout from '../popover/PopoverLayout';
import style from './style.module.scss';
import Link from 'next/link';
import { PATH_CREATE_SHOP } from '@/shared/consts/paths';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={`container ${style.headerInner}`}>
        <TapLogo className={style.tapLogo} />
        <div className={style.navContainer}>
          <button className={style.buttonCatalog}>
            <IconCatalog />
            <span className={style.buttonCatalogText}>Каталог</span>
          </button>
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
        <Link href={PATH_CREATE_SHOP} className={style.createStore}>
          Создать магазин <IconStore />
        </Link>
      </div>
    </header>
  );
};

export default Header;
