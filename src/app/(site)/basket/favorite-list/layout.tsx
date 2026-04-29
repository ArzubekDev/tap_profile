'use client';
import { ReactNode } from 'react';

import ProfileNav from '@/src/screens/profile/profile-navbar';

import StickyBox from 'react-sticky-box';
import style from './style.module.scss';

interface IFavListLayoutProps {
  children: ReactNode;
}

const FavoriteListLayout = ({ children }: IFavListLayoutProps) => {
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
export default FavoriteListLayout;
