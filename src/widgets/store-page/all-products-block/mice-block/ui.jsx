import styles from './styles.module.scss'
import { MiceTitle } from "./mice-title/ui"
import { MiceSlider } from './mice-slider'

export function MiceBlock(){
    return(
        <section className={styles.mice}>
            <div className={styles.container}>
                <MiceTitle></MiceTitle>
                <MiceSlider></MiceSlider>
            </div>
        </section>
    )
}