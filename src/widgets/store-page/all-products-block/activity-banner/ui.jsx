import styles from './styles.module.scss'
import { ButtonLink } from '@/shared/ui/button-link'

export function ActivityBanner(){
    return(
        <div className={styles.activity}>
            <div className={styles.container}>
                <div className={styles.callToActionContent}>
                    <h1 className={styles.callToActionTitle}>ACTIVE BY NATURE</h1>
                    <hr />
                    <p className={styles.callToActionText}>Whether you are hitting the streets or breaking a sweat, make a statement with style that is driven by the need to move.</p>
                    <ButtonLink color='green'>SHOP NOW</ButtonLink>
                </div>
            </div>
        </div>
    )
}