import styles from './styles.module.scss'

interface IndividualProductContentType {
    tab: string
}

export function IndividualProductContent({tab}: IndividualProductContentType){
    return(
        <div className={styles.container}>
            <p>{tab}</p>
        </div>
    )
}