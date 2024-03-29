import styles from './styles.module.scss'
import Link from 'next/link'
import { Links } from '../main-page/initial-block/links'
import { CountrySelect } from '@/features/country-select/ui'

export function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                        <div className={`${styles.shopListContainer} ${styles.listContainer}`}>
                            <ul className={`${styles.shopList} ${styles.list}`}>
                                <Link href='/'><li className={styles.listMainItem}><p className={styles.listTitle}>Shop</p></li></Link>
                                <Link href='/'><li className={`${styles.shopListItem} ${styles.listItem}`}>RazerStores</li></Link>
                                <Link href='/'><li className={`${styles.shopListItem} ${styles.listItem}`}>RazerCafe</li></Link>
                                <Link href='/'><li className={`${styles.shopListItem} ${styles.listItem}`}>Store Locator</li></Link>
                                <Link href='/'><li className={`${styles.shopListItem} ${styles.listItem}`}>Purchase Programs</li></Link>
                                <Link href='/'><li className={`${styles.shopListItem} ${styles.listItem}`}>Education</li></Link>
                                <Link href='/'><li className={`${styles.shopListItem} ${styles.listItem}`}>Exclusives</li></Link>
                                <Link href='/'><li className={`${styles.shopListItem} ${styles.listItem}`}>RazerStore Rewards</li></Link>
                                <Link href='/'><li className={`${styles.shopListItem} ${styles.listItem}`}>Newsletter</li></Link>
                            </ul>
                        </div>
                        <div className={`${styles.exploreListContainer} ${styles.listContainer}`}>
                            <ul className={`${styles.exploreList} ${styles.list}`}>
                                <Link href='/'><li className={styles.listMainItem}><p className={styles.listTitle}>Explore</p></li></Link>
                                <Link href='/'><li className={`${styles.exploreListItem} ${styles.listItem}`}>Technology</li></Link>
                                <Link href='/'><li className={`${styles.exploreListItem} ${styles.listItem}`}>Chroma RGB</li></Link>
                                <Link href='/'><li className={`${styles.exploreListItem} ${styles.listItem}`}>Concepts</li></Link>
                                <Link href='/'><li className={`${styles.exploreListItem} ${styles.listItem}`}>Purchase Programs</li></Link>
                                <Link href='/'><li className={`${styles.exploreListItem} ${styles.listItem}`}>Esports</li></Link>
                                <Link href='/'><li className={`${styles.exploreListItem} ${styles.listItem}`}>Collabs</li></Link>
                            </ul>
                        </div>
                        <div className={`${styles.supportListContainer} ${styles.listContainer}`}>
                            <ul className={`${styles.supportList} ${styles.list}`}>
                                <Link href='/'><li className={styles.listMainItem}><p className={styles.listTitle}>Support</p></li></Link>
                                <Link href='/'><li className={`${styles.supportListItem} ${styles.listItem}`}>Get Help</li></Link>
                                <Link href='/'><li className={`${styles.supportListItem} ${styles.listItem}`}>Registration & Warranty</li></Link>
                                <Link href='/'><li className={`${styles.supportListItem} ${styles.listItem}`}>RazerStore Support</li></Link>
                                <Link href='/'><li className={`${styles.supportListItem} ${styles.listItem}`}>RazerCare</li></Link>
                                <Link href='/'><li className={`${styles.supportListItem} ${styles.listItem}`}>Manage Razer ID</li></Link>
                                <Link href='/'><li className={`${styles.supportListItem} ${styles.listItem}`}>Support Videos</li></Link>
                                <Link href='/'><li className={`${styles.supportListItem} ${styles.listItem}`}>Accessibility Statement</li></Link>
                            </ul>
                        </div>
                        <div className={`${styles.companyListContainer} ${styles.listContainer}`}>
                            <ul className={`${styles.companyList} ${styles.list}`}>
                                <Link href='/'><li className={styles.listMainItem}><p className={styles.listTitle}>Company</p></li></Link>
                                <Link href='/'><li className={`${styles.companyListItem} ${styles.listItem}`}>About Us</li></Link>
                                <Link href='/'><li className={`${styles.companyListItem} ${styles.listItem}`}>Careers</li></Link>
                                <Link href='/'><li className={`${styles.companyListItem} ${styles.listItem}`}>Press Room</li></Link>
                                <Link href='/'><li className={`${styles.companyListItem} ${styles.listItem}`}>zVentures</li></Link>
                                <Link href='/'><li className={`${styles.companyListItem} ${styles.listItem}`}>Contact Us</li></Link>
                            </ul>
                        </div>
                        <Links></Links>
                    </div>
                    <div className={styles.footerOtherContent}>
                        <p className={styles.copyrightWarning}>Copyright © 2022 Razer Inc. All rights reserved.</p>
                        <ul className={styles.additionalInfo}>
                            <Link href='/'><li className=''>Site Map</li></Link>
                            <Link href='/'><li className=''>Legal terms</li></Link>
                            <Link href='/'><li className=''>Privacy Policy</li></Link>
                            <Link href='/'><li className=''>Cookie Policy</li></Link>
                        </ul>
                        <CountrySelect></CountrySelect>
                </div>
            </div>
        </footer>
    )
}