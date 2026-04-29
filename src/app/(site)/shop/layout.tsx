import { ReactNode } from 'react';

import ProfileNav from '@/src/pages/profile/profile-navbar';

import style from './style.module.scss';

interface ICreateLayoutProps {
  children: ReactNode;
}

const CreateLayout = ({ children }: ICreateLayoutProps) => {
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
