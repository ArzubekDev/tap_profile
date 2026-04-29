import InfoLayout from '@/src/widgets/info/InfoLayout/InfoLayout';
import { ReactNode } from 'react';

interface InfoMainLayoutProps {
  children: ReactNode;
}

const InfoMainLayout = ({ children }: InfoMainLayoutProps) => {
  return <InfoLayout>{children}</InfoLayout>;
};

export default InfoMainLayout;
