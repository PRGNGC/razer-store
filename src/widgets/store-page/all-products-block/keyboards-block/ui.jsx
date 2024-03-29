import styles from './styles.module.scss'
import { KeyboardsTitle } from './keyboards-title'
import { KeyboardsSlider } from './keyboards-slider'

export function KeyboardsBlock(){
    return(
        <section className={styles.keyboards}>
            <div className={styles.container}>
                <KeyboardsTitle></KeyboardsTitle>
                <KeyboardsSlider></KeyboardsSlider>
            </div>
        </section>
    )
}