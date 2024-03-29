'use client'

import styles from './styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { menuToggle } from '@/features/store/menu/menuSlice'

export function CorpLogo(){
    const menu = useSelector((state) => state.menuReducer.value);
    const dispatch = useDispatch();

    return(
        <Link href='/'>
            <Image
                onClick={() => { if(menu == true) dispatch(menuToggle()) }}
                src='/icons/razor-label.svg'
                width={50}
                height={50}
                alt='razor-label'
            />
        </Link>
        
    )
}