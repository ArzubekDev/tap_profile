import { ReactNode } from "react";

export interface EmptyDataProps {
  title: string;
  subTitle?: string;
  description?: string | ReactNode;
  subDescription?: string;
  action?: ReactNode;
  icon: ReactNode;
}