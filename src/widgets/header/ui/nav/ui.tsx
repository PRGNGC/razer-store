import Link from 'next/link'
import styles from './styles.module.scss'

export function Navbar(){
    return(
        <nav className={styles.navigationBar}>
            <ul className={styles.menuItems}>
                <li className={styles.menuItem}><Link href="/">PC</Link></li>
                <li className={styles.menuItem}><Link href="/">Console</Link></li>
                <li className={styles.menuItem}><Link href="/">Mobile</Link></li>
                <li className={styles.menuItem}><Link href="/">Lifestyle</Link></li>
                <li className={styles.menuItem}><Link href="/">Services</Link></li>
                <li className={styles.menuItem}><Link href="/">Community</Link></li>
                <li className={styles.menuItem}><Link href="/">Support</Link></li>
                <li className={styles.menuItem}><Link href="/store">Store</Link></li>
            </ul>
        </nav>
    )
}