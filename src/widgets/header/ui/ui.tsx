import styles from './styles.module.scss';
import { CorpLogo } from './logo/ui';
import { Navbar } from './nav/ui'
import { ShoppingCart } from './shopping-cart/ui'
import { MenuBurgerIcon } from '../../../features/header/burger/ui'
import { SearchField } from '@/features/header/search-field/ui'
import { MenuBurger } from './menu/ui'
import { memo } from 'react';

export function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.containerContent}>
                    <MenuBurgerIcon />
                    <CorpLogo/>
                    <Navbar/>
                    <SearchField />
                    <ShoppingCart />
                    <MenuBurger />
                </div>
            </div>
        </header>
    )
}