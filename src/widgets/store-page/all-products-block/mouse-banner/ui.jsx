import styles from './styles.module.scss'
import { ButtonLink } from '@/shared/ui/button-link'

export function MouseBanner(){
    return(
        <div className={styles.mouse}>
            <div className={styles.container}>
                <div className={styles.callToActionContent}>
                    <h1 className={styles.callToActionTitle}>WAKE THE F*CK UP SAMURAI</h1>
                    <hr />
                    <p className={styles.callToActionText}>Think you’re ready for Night City? A word of advice: to survive in the big leagues, you need gear that always takes it to the Edge.</p>
                    <ButtonLink color='black'>SHOP NOW</ButtonLink>
                </div>
            </div>
        </div>
    )
}