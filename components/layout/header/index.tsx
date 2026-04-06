import { IconFavorite, IconUser } from '@/components/Icons';
import IconCart from '@/components/Icons/components/IconCart';
import IconCatalog from '@/components/Icons/components/IconCatalog';
import IconLocation from '@/components/Icons/components/IconLocation';
import IconSearchTap from '@/components/Icons/components/IconSearchTap';
import IconStore from '@/components/Icons/components/IconStore';
import TapLogo from '@/components/Icons/components/TapLogo';
import { Input } from 'antd';
import style from './style.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <TapLogo width={120} height={50} />
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
        <div className={style.profileNav}>
          <IconUser />
          <span className={style.profileNavText}>Профиль</span>
        </div>
        <div className={style.favoriteNav}>
          <IconFavorite />
          <span className={style.favoriteNavText}>Избранное</span>
        </div>
        <div className={style.cartNav}>
          <IconCart />
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
