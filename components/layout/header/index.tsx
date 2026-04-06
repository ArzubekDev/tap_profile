import IconCatalog from '@/components/Icons/components/IconCatalog';
import TapLogo from '@/components/Icons/components/TapLogo';
import style from './style.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <TapLogo width={120} height={50} />
      <div className={style.search}>
        <button className={style.buttonCatalog}>
          <IconCatalog />
          <span className={style.buttonCatalogText}>
          Каталог
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
