'use client';
import ProfileNav from '@/src/widgets/profile/profile-navbar';
import { ReactNode } from 'react';
import StickyBox from 'react-sticky-box';

import style from './style.module.scss';

interface IAccountLayoutProps {
  children: ReactNode;
}

const AccountLayout = ({ children }: IAccountLayoutProps) => {
  return (
    <div className="container">
      <div className={style.accountLayout}>
        <main className={style.main}>{children}</main>
        <StickyBox offsetTop={120} offsetBottom={20} className={style.infoSidebarWrapper}>
          <div className={style.sidebar}>
            <ProfileNav />
          </div>
        </StickyBox>
      </div>
    </div>
  );
};
export default AccountLayout;
