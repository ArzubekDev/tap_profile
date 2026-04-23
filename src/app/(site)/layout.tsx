import { ReactNode } from 'react';

import Footer from '@/src/components/layout/footer';
import Header from '@/src/components/layout/header';

import style from "./style.module.scss"

interface LayoutSiteProps {
  children: ReactNode;
}

const LayoutSite = ({ children }: LayoutSiteProps) => {
  return (
    <div className={style.layoutSite}>
      <Header />
      {children}
      <Footer/>
    </div>
  );
};

export default LayoutSite;
