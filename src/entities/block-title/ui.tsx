import { ReactNode } from 'react'
import styles from './styles.module.scss'

interface BlockTitleProps {
    header: string,
    text: string,
    children?: ReactNode
}

export function BlockTitle({header, text, children}: BlockTitleProps){
    return(
        <div className={styles.blockHeader}>
            <div className={styles.blockHeaderText}>
                <h1 className={styles.blockHeaderTitle}>{header}</h1>
                <hr className={styles.divider} />
                <p className={styles.blockHeaderSubheader}>{text}</p>
            </div>
            <div className={styles.childrenContainer}>
                {children}
            </div>
        </div>
    )
}