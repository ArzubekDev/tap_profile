import Footer from '@/src/components/layout/footer';
import Header from '@/src/components/layout/header';
import { ReactNode } from 'react';

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
