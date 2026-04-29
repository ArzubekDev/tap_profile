import Link from 'next/link';

import { IconStore } from '@/src/shared/ui/Icons';
import { PATH_CREATE_SHOP } from '../../consts/paths';

import style from './style.module.scss';

const CreateStoreButton = () => {
  return (
    <Link href={PATH_CREATE_SHOP} className={style.createStore}>
      Создать магазин <IconStore />
    </Link>
  );
};

export default CreateStoreButton;
