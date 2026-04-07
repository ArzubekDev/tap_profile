import Header from '@/components/layout/header';
import { ReactNode } from 'react';

interface LayoutSiteProps {
  children: ReactNode;
}

const LayoutSite = ({ children }: LayoutSiteProps) => {
  return <>
  <Header/>
  {children}
  </>;
};

export default LayoutSite