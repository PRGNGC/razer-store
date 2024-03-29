import styles from './styles.module.scss'

interface CartInfoProps {
    count: number,
    price: number 
}

export function CartInfo({count, price}: CartInfoProps){
    return(
        <div className={styles.cartInfoContent}>
            <div className={styles.container}>
                <div className={styles.productsCount}>Overall products in the cart - <span className={styles.countNumber}>{count}</span></div>
                <div className={styles.productsPrice}>Price of products in the cart - <span className={styles.priceNumber}>${price}</span></div>
            </div>
        </div>
    )
}