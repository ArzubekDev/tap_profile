import { IconUser } from '@/src/shared/ui/Icons';
import PopoverLayout from '@/src/shared/ui/popover/PopoverLayout';
import ProfileDropDown from '../ProfileDropdown/ProfileDropDown';

import style from './style.module.scss';

const ProfileButton = () => {
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

export default ProfileButton;
