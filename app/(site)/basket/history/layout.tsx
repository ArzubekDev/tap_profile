import ProfileNav from "@/components/pages/profile/ProfileNav";
import { ReactNode } from "react";
import style from './style.module.scss';

interface HistoryLayoutProps {
    children: ReactNode
}

const HistoryLayout = ({children}: HistoryLayoutProps) => {
    return (
    <div className="container">
      <div className={style.accountLayout}>
        <main className={style.main}>{children}</main>
        <ProfileNav />
      </div>
    </div>
    )
}
export default HistoryLayout