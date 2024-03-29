import styles from './styles.module.scss'

export function CategoriesQuote(){
    return(
        <div className={styles.callToAction}>
        <div className={styles.container}>
            <div className={styles.callToActionContent}>
                <h1 className={styles.callToActionTitle}>“INSANELY COMFORTABLE AND LIGHT, WITH GREAT NOISE CANCELLATION.”</h1>
                <hr />
                <p className={styles.callToActionText}>- KARRIGAN <br/> MOUSESPORTS | CS:GO</p>
            </div>
        </div>
    </div>
    )
}