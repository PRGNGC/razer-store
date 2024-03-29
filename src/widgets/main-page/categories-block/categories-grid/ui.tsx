import styles from './styles.module.scss'
import Link from 'next/link'

export function CategoriesGrid(){
    return(
        <div className={styles.allCategories}>
        <div className={`${styles.laptopCategory} ${styles.category}`}>
            <Link href='/' />
            <p className={styles.categoryTitle}>Laptops</p>
        </div>
        <div className={`${styles.keyboardCategory} ${styles.category}`}>
            <Link href='/' />
            <p className={styles.categoryTitle}>Keyboards</p>
        </div>
        <div className={`${styles.miceCategory} ${styles.category}`}>
            <Link href='/' />
            <p className={styles.categoryTitle}>Mice</p>
        </div>
        <div className={`${styles.componentCategory} ${styles.category}`}>
            <Link href='/' />
            <p className={styles.categoryTitle}>Components</p>
        </div>
        <div className={`${styles.audioCategory} ${styles.category}`}>
            <Link href='/' />
            <p className={styles.categoryTitle}>Audio</p>
        </div>
        <div className={`${styles.chairCategory} ${styles.category}`}>
            <Link href='/' />
            <p className={styles.categoryTitle}>Chairs</p>
        </div>
        <div className={`${styles.streamingCategory} ${styles.category}`}>
            <Link href='/' />
            <p className={styles.categoryTitle}>Streaming</p>
        </div>
        <div className={`${styles.consoleCategory} ${styles.category}`}>
            <Link href='/' />
            <p className={styles.categoryTitle}>Console</p>
        </div>
        <div className={`${styles.mobileCategory} ${styles.category}`}>
            <Link href='/' />
            <p className={styles.categoryTitle}>Mobile</p>
        </div>
        <div className={`${styles.gearCategory} ${styles.category}`}>
            <Link href='/' />
            <p className={styles.categoryTitle}>Gear</p>
        </div>
    </div>
    )
}