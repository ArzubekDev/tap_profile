import Link from 'next/link';

import {
  PATH_BASKET_HISTORY,
  PATH_CREATE_SHOP,
  PATH_FAVORITE,
  PATH_PROFILE,
} from '@/src/shared/consts/paths';
import { IconPlus } from '@/src/shared/ui/Icons';

import style from '@/src/components/layout/header/style.module.scss';

const ProfileDropDown = (
  <div className={style.profileDropdownMenu}>
    <Link href={PATH_PROFILE}>Мой профиль</Link>
    <Link href={PATH_BASKET_HISTORY}>История заказов</Link>
    <Link href={PATH_FAVORITE}>Избранные товары</Link>
    <div className={style.createStoreDropDown}>
      <p>Мои магазины</p>
      <Link href={PATH_CREATE_SHOP}>
        <IconPlus className={style.dropdownPlusIcon} /> Создать магазин
      </Link>
    </div>
    <hr className={style.dropdownline} />
    <button className={style.logoutBtn}>Выйти</button>
  </div>
);

export default ProfileDropDown;
