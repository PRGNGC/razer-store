'use client'
import styles from './styles.module.scss'
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getAllCartProducts, changeProductAmount } from './api'
import { ItemCard } from "@/entities/item-card"
import { Loader } from '@/shared/ui/loader'
import { CartInfo } from '../cart-info'
import { ProductType } from '@/shared/types'

export function CartContent(){
    const {isLoading, isError, data, error} = useQuery({queryKey: ["cartproducts"], queryFn: getAllCartProducts})

    const queryClient = useQueryClient();
    
    const patch = useMutation({
        mutationFn: changeProductAmount,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cartproducts"], exact: true });
        },
    })
    
    if(isLoading){
        return <Loader/>
    }
    
    if(isError){
        return <p>{error.message}</p>
    }

    let productsCount = data.length;
    let productsPrice = data.reduce((sum: number, cur: ProductType) => sum + cur.deviceActualPrice * cur.deviceAmount, 0).toFixed(2);

    return(
        <>
            <CartInfo count={productsCount} price={productsPrice} />

            <div className={styles.cartContent}>
                <div className={styles.container}>
                        {                 
                            data.map((i: ProductType) => {
                                return(
                                    <div key={crypto.randomUUID()} className={styles.product}>
                                        <ItemCard deviceInfo={i} productRoute=''></ItemCard>
                                        <div className={styles.productCounter}>
                                            <form onSubmit={(e) => {
                                                e.preventDefault();
                                            }}>
                                                <span className={styles.counterIncrement} onClick={ () => {
                                                    let newAmount = i.deviceAmount + 1
                                                    let id = i.id
                                                    patch.mutate({newAmount, id})
                                                }
                                                }>+</span>
                                                <input 
                                                    type="number" 
                                                    className={styles.counterValue} 
                                                    defaultValue={i.deviceAmount} 
                                                    // onInput={() => {
                                                    //         let newAmount = i.deviceAmount - 1
                                                    //         if(newAmount <= 0) return
                                                    //         let id = i.id
                                                    //         patch.mutate({newAmount, id})
                                                    //     }
                                                    // } 
                                                    />
                                                <span className={styles.counterDecrement} onClick={ () => {
                                                    let newAmount = i.deviceAmount - 1
                                                    if(newAmount <= 0) return
                                                    let id = i.id
                                                    patch.mutate({newAmount, id})
                                                }
                                                }>-</span>
                                            </form>
                                        </div>
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </>
    )
}