import { ButtonLink } from "@/shared/ui/button-link"
import styles from './styles.module.scss'

export function MainSuggestion(){
    return(
    <div className={styles.mainScreenProduct}>
        <h1 className={styles.productGreenTitle}>RAZER</h1>
        <h1 className={styles.productWhiteTitle}>BLACKSHARK V2</h1>
        <p className={styles.productText}>If esports is everything, then give it your all with the Razer BlackShark V2. With an esports headset that’s a triple threat of amazing audio, superior mic clarity and supreme sound isolation, your time to turn pro is now</p>
        <div className={styles.productButtons}>
            <ButtonLink color='green' element=''>BUY</ButtonLink>
            <ButtonLink color='transparent' element=''>Read more</ButtonLink>
        </div>
    </div>)
}