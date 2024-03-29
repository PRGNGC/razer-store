'use client'

import styles from './styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { SearchField } from '@/features/header/search-field/ui'
import { useDispatch, useSelector } from 'react-redux'
import { menuToggle } from '@/features/store/menu/menuSlice'

export function MenuBurger(){
    const menu = useSelector((state) => state.menuReducer.value);
    const dispatch = useDispatch();

    if(menu == true){
    return(
        <div className={styles.menuBurgerContainer}>
            <SearchField fieldType='menu'></SearchField>
            <nav className={styles.navigationBar}>
                <ul className={styles.menuItems}>
                    <li className={styles.menuItem} onClick={() => dispatch(menuToggle())} >
                        <Image src='/icons/Monitor.svg' alt='pc' width={24} height={24} />
                        <Link href="/">PC</Link>
                    </li>
                    <li className={styles.menuItem} onClick={() => dispatch(menuToggle())} >
                        <Image src='/icons/Games.svg' alt='games' width={24} height={24} />
                        <Link href="/">Console</Link>
                    </li>
                    <li className={styles.menuItem} onClick={() => dispatch(menuToggle())} >
                        <Image src='/icons/Mobile.svg' alt='mobile' width={24} height={24} />
                        <Link href="/">Mobile</Link>
                    </li>
                    <li className={styles.menuItem} onClick={() => dispatch(menuToggle())} >
                        <Image src='/icons/Heart.svg' alt='heart' width={24} height={24} />
                        <Link href="/">Lifestyle</Link>
                    </li>
                    <li className={styles.menuItem} onClick={() => dispatch(menuToggle())} >
                        <Image src='/icons/Category.svg' alt='services' width={24} height={24} />
                        <Link href="/">Services</Link>
                    </li>
                    <li className={styles.menuItem} onClick={() => dispatch(menuToggle())} >
                        <Image src='/icons/Friends.svg' alt='community' width={24} height={24} />
                        <Link href="/">Community</Link>
                    </li>
                    <li className={styles.menuItem} onClick={() => dispatch(menuToggle())} >
                        <Image src='/icons/lifebouy.svg' alt='support' width={24} height={24} />
                        <Link href="/">Support</Link>
                    </li>
                    <li className={styles.menuItem} onClick={() => dispatch(menuToggle())} >
                        <Image src='/icons/Bag.svg' alt='bag' width={24} height={24} />
                        <Link href="/">Store</Link>
                    </li>
                </ul>
            </nav>
            <Image src='/icons/razor-label.svg' alt='razor-label'  width={50} height={50} onClick={() => dispatch(menuToggle())} />
            <figcaption>Razer Inc.</figcaption>

            <Link href='/cart'>
                <Image src='/icons/shopping-cart.svg' alt='shopping-cart'  width={24} height={24} onClick={() => dispatch(menuToggle())} />
            </Link>
        </div>
    )
}
}
