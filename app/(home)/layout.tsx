import Header from '@/components/layout/header';
import { ReactNode } from 'react';

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return <>
  <Header/>
  {children}
  </>;
};

export default HomeLayout