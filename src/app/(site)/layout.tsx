import { ReactNode } from 'react';

import HeaderView from '@/src/components/layout/header';
import FooterView from '@/src/components/layout/footer';

import style from "./style.module.scss"

interface ILayoutSiteProps {
  children: ReactNode;
}

const LayoutSite = ({ children }: ILayoutSiteProps) => {
  return (
    <div className={style.layoutSite}>
      <HeaderView />
      {children}
      <FooterView/>
    </div>
  );
};

export default LayoutSite;
