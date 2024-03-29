import styles from './styles.module.scss'
import Image from 'next/image'

export function Loader(){
    return(
        <div className={styles.loaderContent}>
            <Image src='/icons/razor-label.svg' alt='loader' width={200} height={200} className={styles.loaderImg} />
        </div>
    )
}