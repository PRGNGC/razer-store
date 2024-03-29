import styles from './styles.module.scss'
import { LaptopsTitle } from './laptops-title'
import { LaptopsSlider } from './laptops-slider'

export function LaptopsBlock(){
    return(
        <section className={styles.laptops}>
            <div className={styles.container}>
                <LaptopsTitle></LaptopsTitle>
                <LaptopsSlider></LaptopsSlider>
            </div>
        </section>
    )
}