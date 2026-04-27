import { ReactNode } from 'react';

import Footer from '@/src/components/layout/footer';
import Header from '@/src/components/layout/header';

import style from "./style.module.scss"

interface ILayoutSiteProps {
  children: ReactNode;
}

const LayoutSite = ({ children }: ILayoutSiteProps) => {
  return (
    <div className={style.layoutSite}>
      <Header />
      {children}
      <Footer/>
    </div>
  );
};

export default LayoutSite;
