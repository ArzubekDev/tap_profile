'use client';
import InfoSidebar from '@/src/components/pages/info/InfoSidebar/InfoSidebar';
import { ReactNode } from 'react';
import StickyBox from 'react-sticky-box';
import style from './style.module.scss';

interface InfoLayoutProps {
  children: ReactNode;
}

const InfoLayout = ({ children }: InfoLayoutProps) => {
  return (
    <div className="container">
      <div className={style.infoLayout}>
        <main className={style.main}>{children}</main>
        <StickyBox offsetTop={120} offsetBottom={20} className={style.infoSidebarWrapper}>
          <div className={style.infoSidebar}>
            <InfoSidebar />
          </div>
        </StickyBox>
      </div>
    </div>
  );
};

export default InfoLayout;
