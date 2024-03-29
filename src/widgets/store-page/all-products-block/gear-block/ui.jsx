import styles from './styles.module.scss'
import { GearTitle } from "./gear-title/ui"
import { GearSlider } from './gear-slider'

export function GearBlock(){
    return(
        <section className={styles.gear}>
            <div className={styles.container}>
                <GearTitle></GearTitle>
                <GearSlider></GearSlider>
            </div>
        </section>
    )
}