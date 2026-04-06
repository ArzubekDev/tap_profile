import IconPlus from "@/components/Icons/components/IconPlus";
import style from "@components/layout/header/style.module.scss"

 export  const profileMenuContent = (
    <div className={style.profileDropdownMenu}>
      <a href="/accounts/profile">Мой профиль</a>
      <a href="/basket/history">История заказов</a>
      <a href="/basket/favorite-list">Избранные товары</a>
      <div className={style.createStoreDropDown}>
        <p>Мои магазины</p>
        <a href="/shop/create"><IconPlus className={style.dropdownPlusIcon}/> Создать магазин</a>
      </div>
      <hr className={style.dropdownline}/>
      <button className={style.logoutBtn}>Выйти</button>
    </div>
  );
 
