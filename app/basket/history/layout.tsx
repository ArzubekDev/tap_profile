import ProfileNav from "@/components/pages/profile/ProfileNav";
import { ReactNode } from "react";

interface HistoryLayoutProps {
    children: ReactNode
}

const HistoryLayout = ({children}: HistoryLayoutProps) => {
    return (
        <div>
        {children}
        <ProfileNav/>
        </div>
    )
}
export default HistoryLayout