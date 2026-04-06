import ThemeConfig from '@/shared/theme/themeConfig';
import ProfileNav from './ProfileNav';
import ProfileForm from './profileForm';

import style from './style.module.scss';

const Profile = () => {

  return (
    <ThemeConfig>
      <section className={style.profile}>
        <div className={`container ${style.profileInner}`}>
          <ProfileForm />
          <ProfileNav />
        </div>
      </section>
    </ThemeConfig>
  );
};

export default Profile;
