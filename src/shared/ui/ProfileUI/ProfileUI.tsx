import { IconUser } from '@/src/components/Icons'
import PopoverLayout from '@/src/components/layout/popover/PopoverLayout'
import style from "./style.module.scss"
import profileMenuContent from '../Dropdown'

const ProfileUI = () => {
  return (
     <PopoverLayout
            content={profileMenuContent}
            placement="bottomRight"
            trigger="hover"
            innerClassName={style.profilePopoverContent}
          >
            <div className={style.navItem}>
              <IconUser className={style.navItemIcon} />
              <span className={style.navItemText}>Профиль</span>
            </div>
          </PopoverLayout>
  )
}

export default ProfileUI