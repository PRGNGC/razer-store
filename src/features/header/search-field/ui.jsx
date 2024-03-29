import Image from 'next/image'
import styles from './styles.module.scss'

export function SearchField({fieldType = 'main'}){
    return(
        <label id='search-field' htmlFor={`searchField ` + fieldType} className={fieldType === 'main' ? `${styles.main} ${styles.searchFieldContent}` : styles.searchFieldContent}>
        {/* <label htmlFor={`searchField `} className={styles.searchFieldContent}> */}
            <Image
                src='/icons/search-glass.svg'
                alt='search-glass'
                width={18}
                height={18}
                style={{width: 'auto', height: 'auto'}}
            />
            <input type="search" id={`searchField ` + fieldType} placeholder='Search' className={styles.searchInput}/>
        </label>
    )
}