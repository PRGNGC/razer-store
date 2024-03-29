import styles from './styles.module.scss'
import { CategoriesTitle } from './categories-title'
import { CategoriesGrid } from './categories-grid'
import { CategoriesQuote } from './categories-quote'
import { useSelector } from 'react-redux'

export function CategoriesBlock(){
    return(
        <section className={styles.productsCategories}>
            <div className={styles.container}>
                <CategoriesTitle></CategoriesTitle>
                <CategoriesGrid></CategoriesGrid>
            </div>
                <CategoriesQuote></CategoriesQuote>
        </section>
    )
}