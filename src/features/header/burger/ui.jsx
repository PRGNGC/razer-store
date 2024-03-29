'use client'

import styles from './styles.module.scss'
import { useDispatch } from 'react-redux'
import { menuToggle } from '@/features/store/menu/menuSlice'

export function MenuBurgerIcon(){
    const dispatch = useDispatch();

    return(
        <div className={styles.iconContainer}>
            <div className={styles.iconContent}></div>
            <div className={`${styles.iconContent} ${styles.iconContentCenter}`}></div>
            <div className={styles.iconContent}></div>
            <input type="checkbox" name='menu-toggler' className={styles.burgerToggler} onClick = {() => dispatch(menuToggle())} />
        </div>
    )
}