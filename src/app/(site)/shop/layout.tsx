import ProfileNav from "@/src/components/pages/profile/ProfileNav";
import { ReactNode } from "react";
import style from './style.module.scss';

interface CreateLayoutProps {
    children: ReactNode
}

const CreateLayout = ({children}: CreateLayoutProps) => {
    return (
    <div className="container">
      <div className={style.accountLayout}>
        <main className={style.main}>{children}</main>
        <ProfileNav />
      </div>
    </div>
    )
}
export default CreateLayout