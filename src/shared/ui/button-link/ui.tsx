import Link from 'next/link'
import styles from './styles.module.scss'
import { ReactElement, ReactNode } from 'react';

interface ButtonLinkProps {
    color: string,
    element: string,
    children: ReactNode
}

export function ButtonLink({color, element, children}: ButtonLinkProps){
    switch(color){
        case 'green':
            return(<Link className={styles.button} href={`${element}`}><div className={styles.greenButton}>{children}</div></Link>)
        break;
        case 'transparent':
            return(<Link className={styles.button} href={`${element}`}><div className={styles.transparentButton}>{children}</div></Link>)
        break;
        case 'white':
            return(<Link className={styles.button} href={`${element}`}><div className={styles.whiteButton}>{children}</div></Link>)
        break;
        case 'black':
            return(<Link className={styles.button} href={`${element}`}><div className={styles.blackButton}>{children}</div></Link>)
        break;
        }
}