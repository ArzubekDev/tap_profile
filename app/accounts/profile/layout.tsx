import ProfileNav from "@/components/pages/profile/ProfileNav";
import { ReactNode } from "react";

interface ProfileProps {
    children: ReactNode
}

const ProfileLayout = ({children}: ProfileProps) => {
    return (
        <div>
        {children}
        <ProfileNav/>
        </div>
    )
}
export default ProfileLayout