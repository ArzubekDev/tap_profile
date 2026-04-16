import { ReactNode } from "react"
import InfoSidebar from "../infoSidebar"

import style from "./style.module.scss"


interface InfoLayoutProps {
    children: ReactNode
}
const InfoLayout = ({children}:  InfoLayoutProps) => {
    return (
        <div className={style.infoLayout}>
        {children}
        <div className={style.infoSidebar}>
            <InfoSidebar/>
        </div>
        </div>
    )
}

export default InfoLayout