import ProfileNav from '@/src/components/pages/profile/ProfileNav';
import { ReactNode } from 'react';
import style from './style.module.scss';
import StickyBox from 'react-sticky-box';

interface HistoryLayoutProps {
  children: ReactNode;
}

const HistoryLayout = ({ children }: HistoryLayoutProps) => {
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
export default HistoryLayout;
