import { NewsTitle } from "./news-title/ui"
import { NewsSlider } from "./news-slider/ui"
import styles from './styles.module.scss'

export function NewsBlock(){
    return(
        <>
        <section className={styles.newsBlock}>
            {
                console.log("render")
            }
            <div className={styles.container}>
                <div className={styles.newsBlockContent}>
                    <NewsTitle></NewsTitle>
                    <NewsSlider></NewsSlider>
                </div>
            </div>
        </section>
        </>
    )
}