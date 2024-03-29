import Image from 'next/image'
import Link from 'next/link'

export function ShoppingCart(){
    return(
        <Link href='/cart'>
            <Image 
                src='/icons/shopping-cart.svg'
                alt='shopping-cart'
                width={24}
                height={24}
            />
        </Link>
    )
}