'use client'
import styles from './styles.module.scss'
import { useQuery } from '@tanstack/react-query'
import { getProduct } from './api'
import { Loader } from '@/shared/ui/loader'
import { IndividualProductFeatures } from './individual-product-features'
import { IndividualProductReview } from './individual-product-review'

interface IndividualProductContentType {
    category: string,
    id: string
    tab: string
}

export function IndividualProductContent({category, id, tab}: IndividualProductContentType){
    const {isLoading, isError, data, error} = useQuery({queryKey: ["prod", category, id], queryFn: () => getProduct(category, id)})

    if(isLoading){ return <Loader /> }
    if(isError){ return <p>{error.message}</p> }

    return(
        <div className={styles.container}>
            { tab == 'reviews' && <IndividualProductReview reviews={data.deviceReviews}/>}
            { tab == 'features' && <IndividualProductFeatures featuresList={data.deviceFeatures}/>}
        </div>
    )
}