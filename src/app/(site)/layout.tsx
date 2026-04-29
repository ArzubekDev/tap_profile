import { ReactNode } from 'react';

import FooterView from '@/src/widgets/footer';
import HeaderView from '@/src/widgets/header';

import style from './style.module.scss';

interface ILayoutSiteProps {
  children: ReactNode;
}

const LayoutSite = ({ children }: ILayoutSiteProps) => {
  return (
    <div className={style.layoutSite}>
      <HeaderView />
      {children}
      <FooterView />
    </div>
  );
};

export default LayoutSite;
