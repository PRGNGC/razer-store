import styles from './styles.module.scss'
import { ButtonLink } from '@/shared/ui/button-link'

export function WatchBanner(){
    return(
        <div className={styles.watch}>
            <div className={styles.container}>
                <div className={styles.callToActionContent}>
                    <h1 className={styles.callToActionTitle}>MAKE EVERY SECOND A VICTORY</h1>
                    <hr />
                    <p className={styles.callToActionText}>Designed for the next generation of gamers, supercharge your style with customizable straps, dials, Razer Chroma™ RGB effects and more.</p>
                    <ButtonLink color='green'>SHOP NOW</ButtonLink>
                </div>
            </div>
        </div>
    )
}