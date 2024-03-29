import styles from './styles.module.scss'
import { CategoryChoose } from '@/features/category-choose'

export function Categories(){
    return(
        <section className={styles.categoriesBlock}>
            <div className={styles.container}>
                <h1 className={styles.categoriesTitle}>Choose categories</h1>
                <CategoryChoose ></CategoryChoose>
            </div>
        </section>
    )
}