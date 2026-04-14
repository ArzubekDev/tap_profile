import ProfileNav from "@/src/components/pages/profile/ProfileNav";
import { ReactNode } from "react";
import style from './style.module.scss';

interface FavListLayoutProps {
    children: ReactNode
}

const FavListLayout = ({children}: FavListLayoutProps) => {
    return (
    <div className="container">
      <div className={style.accountLayout}>
        <main className={style.main}>{children}</main>
<div className={style.sidebar}>
        <ProfileNav />
</div>
      </div>
    </div>
    )
}
export default FavListLayout