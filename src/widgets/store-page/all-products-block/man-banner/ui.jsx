import styles from './styles.module.scss'
import { ButtonLink } from '@/shared/ui/button-link'

export function ManBanner(){
    return(
        <div className={styles.man}>
            <div className={styles.container}>
                <div className={styles.callToActionContent}>
                    <h1 className={styles.callToActionTitle}>TUMI | RAZER CARRY HARD</h1>
                    <hr />
                    <p className={styles.callToActionText}>Rise to the occasion and bring the team to victory with the TUMI | Razer collection.</p>
                    <ButtonLink color='green'>SHOP NOW</ButtonLink>
                </div>
            </div>
        </div>
    )
}