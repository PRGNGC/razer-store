import styles from './styles.module.scss'
import { MobileTitle } from "./mobile-title/ui"
import { MobileSlider } from './mobile-slider'

export function MobileBlock(){
    return(
        <section className={styles.mobile}>
            <div className={styles.container}>
                <MobileTitle></MobileTitle>
                <MobileSlider></MobileSlider>
            </div>
        </section>
    )
}