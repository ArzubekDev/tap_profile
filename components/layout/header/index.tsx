import IconCatalog from '@/components/Icons/components/IconCatalog';
import IconSearchTap from '@/components/Icons/components/IconSearchTap';
import TapLogo from '@/components/Icons/components/TapLogo';
import { Input } from 'antd';
import style from './style.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <TapLogo width={120} height={50} />
      <div className={style.searchContainer}>
        <button className={style.buttonCatalog}>
          <IconCatalog />
          <span className={style.buttonCatalogText}>Каталог</span>
        </button>
        <div className={style.headerSearchInput}>
          <form className={style.searchForm}>
            <IconSearchTap />
            <label htmlFor="search" style={{width: "100%"}}>
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
      </div>
    </header>
  );
};

export default Header;
