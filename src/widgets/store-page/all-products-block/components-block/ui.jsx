import styles from './styles.module.scss'
import { ComponentsTitle } from "./components-title/ui"
import { ComponentsSlider } from './components-slider'

export function ComponentsBlock(){
    return(
        <section className={styles.components}>
            <div className={styles.container}>
                <ComponentsTitle></ComponentsTitle>
                <ComponentsSlider></ComponentsSlider>
            </div>
        </section>
    )
}