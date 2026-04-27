import { IconUser } from '@/src/components/Icons';
import PopoverLayout from '@/src/components/layout/popover/PopoverLayout';
import ProfileDropDown from '../ProfileDropdown/ProfileDropDown';

import style from './style.module.scss';

const ProfileUI = () => {
  return (
    <PopoverLayout
      content={ProfileDropDown}
      placement="bottomRight"
      trigger="hover"
      innerClassName={style.profilePopoverContent}
    >
      <div className={style.navItem}>
        <IconUser className={style.navItemIcon} />
        <span className={style.navItemText}>Профиль</span>
      </div>
    </PopoverLayout>
  );
};

export default ProfileUI;
