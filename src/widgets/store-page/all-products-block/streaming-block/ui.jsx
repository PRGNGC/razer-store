import styles from './styles.module.scss'
import { StreamingTitle } from "./streaming-title/ui"
import { StreamingSlider } from './streaming-slider'

export function StreamingBlock(){
    return(
        <section className={styles.streaming}>
            <div className={styles.container}>
                <StreamingTitle></StreamingTitle>
                <StreamingSlider></StreamingSlider>
            </div>
        </section>
    )
}