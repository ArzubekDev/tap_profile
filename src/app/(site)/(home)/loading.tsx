import CardSkeleton from '@/src/shared/ui/CardSkeleton/CardSkeleton'
import style from "./style.module.scss"

const Homeloading = () => {
    return (
        <div className="container">
            <div className={style.loading}>
                <CardSkeleton/>
            </div>
        </div>
    )
}

export default Homeloading