import styles from './styles.module.scss'
import { ButtonLink } from '@/shared/ui/button-link'

export function HeadphoneBanner(){
    return(
        <div className={styles.headphone}>
            <div className={styles.container}>
                <div className={styles.callToActionContent}>
                    <h1 className={styles.callToActionTitle}>TACTICAL AUDIO ADVANTAGE</h1>
                    <hr />
                    <p className={styles.callToActionText}>The clutchest of plays, the most epic of aces—play like the pros and take your squad to the big leagues with the Razer BlackShark V2 Pro - Six Siege Special Edition, a top-tier wireless esports headset designed for true competitive gaming.</p>
                    <ButtonLink color='green'>SHOP NOW</ButtonLink>
                </div>
            </div>
        </div>
    )
}