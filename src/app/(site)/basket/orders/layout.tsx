'use client';
import ProfileNav from '@/src/components/pages/profile/profile-nav';
import { ReactNode } from 'react';
import StickyBox from 'react-sticky-box';

import style from './style.module.scss';

interface IHistoryLayoutProps {
  children: ReactNode;
}

const HistoryLayout = ({ children }: IHistoryLayoutProps) => {
  return (
    <div className="container">
      <h3 className={style.title}>История заказов</h3>
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
export default HistoryLayout;
