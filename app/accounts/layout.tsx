import Header from '@/components/layout/header';
import { ReactNode } from 'react';

interface ProfileLayoutProps {
  children: ReactNode;
}

const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  return <>
  <Header/>
  {children}
  </>;
};

export default ProfileLayout