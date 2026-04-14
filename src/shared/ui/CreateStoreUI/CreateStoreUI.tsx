import Link from 'next/link'
import { PATH_CREATE_SHOP } from '../../consts/paths'
import { IconStore } from '@/src/components/Icons'
import style from "./style.module.scss"

const CreateStoreUI = () => {
  return (
     <Link href={PATH_CREATE_SHOP} className={style.createStore}>
          Создать магазин <IconStore />
        </Link>
  )
}

export default CreateStoreUI