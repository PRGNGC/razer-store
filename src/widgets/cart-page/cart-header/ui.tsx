import styles from './styles.module.scss'
import { BlockTitle } from '@/entities/block-title'

export function CartHeader(){
    return(
        <div className={styles.container}>
            <BlockTitle header='Shopping Cart' text=''></BlockTitle>
        </div>
    )
}