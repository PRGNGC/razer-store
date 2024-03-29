'use client'
import styles from './styles.module.scss'
import { useQuery } from '@tanstack/react-query'
import { getProduct } from './api'
import { Loader } from '@/shared/ui/loader'
import { BlockTitle } from '@/entities/block-title'
import { IndividualProductSlider } from './individual-product-slider/ui'

interface IndividualProductType {
    category: string,
    productId: string
}

export function IndividualProductLayout({category, productId}: IndividualProductType){
    const {isLoading, isError, data, error} = useQuery({queryKey: ["laptop", category, productId], queryFn: () => getProduct(category, productId)})

    if(isLoading){
        return  <Loader/>
    }
    
    if(isError){
        return  <p>{error.message}</p>
    }

    return(
        <div className={styles.content}>
            <div className={styles.container}>
                <BlockTitle header={data?.deviceTitle} text="s"></BlockTitle>
                <IndividualProductSlider mainGallery={data.deviceMainGallery} thumbsGallery={data.deviceThumbsGallery}></IndividualProductSlider>
            </div>
        </div>
    )
}