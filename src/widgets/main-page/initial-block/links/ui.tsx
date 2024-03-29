import styles from './styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export function Links(){
    return(
        <div className={styles.mainScreenSocialLinks}>
            <p className={styles.socialLinksWatchword}>FOR GAMERS. BY GAMERS.™</p>
            <div className={styles.socialLinks}>
                <Link href='/'> 
                    <Image 
                        src='/icons/youtube.svg' 
                        alt='YoutubeIcon' 
                        width={20} 
                        height={20}
                        
                    />
                </Link>
                <Link href='/'>
                    <Image 
                        src='/icons/facebook.svg' 
                        alt='FacebookIcon' 
                        width={13} 
                        height={20}
                        
                    />
                </Link>
                <Link href='/'>
                    <Image 
                        src='/icons/instagram.svg' 
                        alt='InstagramIcon' 
                        width={20} 
                        height={20}
                        
                    />
                </Link>
                <Link href='/'>
                    <Image 
                        src='/icons/twitter.svg' 
                        alt='TwitterIcon' 
                        width={20} 
                        height={20}
                        
                    />
                </Link>
            </div>
        </div>
    )
}