'use client'
import Link from 'next/link'
import styles from './styles.module.scss'
import { useParams } from 'next/navigation'

export function IndividualProductNav(){
    const params = useParams();

    return(
        <div className={styles.navContent}>
            <div className={styles.container}>
                <ul className={styles.navList}>
                    <li><Link href={`/store/${params?.slug}/${params?.product}/features`}>Features</Link></li>
                    <li><Link href={`/store/${params?.slug}/${params?.product}/reviews`}>Reviews</Link></li>
                </ul>
            </div>
        </div>
    )
} 