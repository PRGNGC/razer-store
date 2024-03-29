import styles from './styles.module.scss'
import { ConsoleTitle } from "./console-title/ui"
import { ConsoleSlider } from './console-slider'

export function ConsoleBlock(){
    return(
        <section className={styles.console}>
            <div className={styles.container}>
                <ConsoleTitle></ConsoleTitle>
                <ConsoleSlider></ConsoleSlider>
            </div>
        </section>
    )
}