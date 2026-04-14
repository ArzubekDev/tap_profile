import { IconCatalog } from '@/src/components/Icons';
import style from './style.module.scss';

const CatalogButton = () => {
  return (
    <button className={style.buttonCatalog}>
      <IconCatalog />
      <span className={style.buttonCatalogText}>Каталог</span>
    </button>
  );
};

export default CatalogButton;
