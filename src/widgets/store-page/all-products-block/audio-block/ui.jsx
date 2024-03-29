import styles from './styles.module.scss'
import { AudioTitle } from "./audio-title/ui"
import { AudioSlider } from './audio-slider'

export function AudioBlock(){
    return(
        <section className={styles.audio}>
            <div className={styles.container}>
                <AudioTitle></AudioTitle>
                <AudioSlider></AudioSlider>
            </div>
        </section>
    )
}