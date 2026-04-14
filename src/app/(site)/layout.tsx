import { ReactNode } from 'react';

import Footer from '@/src/components/layout/footer';
import Header from '@/src/components/layout/header';

interface LayoutSiteProps {
  children: ReactNode;
}

const LayoutSite = ({ children }: LayoutSiteProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  );
};

export default LayoutSite;
