import { ReactNode } from 'react';

import ProfileNav from '@/src/components/pages/profile/profile-nav';

import style from './style.module.scss';

interface CreateLayoutProps {
  children: ReactNode;
}

const CreateLayout = ({ children }: CreateLayoutProps) => {
  return (
    <div className="container">
      <div className={style.accountLayout}>
        <main className={style.main}>{children}</main>
        <div className={style.sidebar}>
          <ProfileNav />
        </div>
      </div>
    </div>
  );
};
export default CreateLayout;
