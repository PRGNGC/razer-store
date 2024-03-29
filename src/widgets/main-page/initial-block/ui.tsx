import styles from './styles.module.scss'
import { MainSuggestion } from './main-suggestion'
import { Links } from './links' 
import { OtherSuggestions } from './other-suggestions'

export function InitialBlock(){
    return(
        <section className={styles.initialBlock} > 
            <div className={styles.container}>
                <div className={styles.initialBlockContent}>
                    <MainSuggestion></MainSuggestion>
                    <div className={styles.mainScreenLinks}>
                        <Links></Links>
                        <OtherSuggestions></OtherSuggestions>
                    </div>
                </div>
            </div>
        </section>
    )
}