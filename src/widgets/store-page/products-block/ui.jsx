import { useState } from 'react'
import styles from './styles.module.scss'
import { useQuery } from '@tanstack/react-query'
import { getAllCategoryProducts } from './api'
import { ItemCard } from '@/entities/item-card'
import { ProductsSorting } from '@/features/products-sorting'
import { useParams } from 'next/navigation'
import { Loader } from '@/shared/ui/loader'
import { useSearchParams } from 'next/navigation'

export function ProductsBlock({filters, category}){
    const [triage, setTriage] = useState("Newest");
    const [page, setPage] = useState(1);
    const params = useParams();
    const searchParams = useSearchParams();
    
    const editableSearchParams = new URLSearchParams(searchParams.toString());
    console.log('Filters in block - ' + editableSearchParams);

    console.log(Array.from(searchParams.entries()));

    const { isLoading, isError, data, error } = useQuery({ queryKey: ['products', category, filters, page], queryFn: () => getAllCategoryProducts(category, filters, page)})

    if(isLoading){
        return <p>Loading...</p>
    }

    if(isError){
        return <p>{error.message}</p>
    }

    switch(triage){
        case "Cheapest":
        {
            data.data.sort((a, b) => a.deviceActualPrice - b.deviceActualPrice);
            break;
        }
    case "Most Expensive":
        {
            data.data.sort((a, b) => b.deviceActualPrice - a.deviceActualPrice);
            break;
        }
    }   


    let filteredProducts = [];

    if(searchParams.toString() != ''){
        data?.data?.map(product => {
            searchParams.forEach(filter => {
            if( product.size == filter ||
                product.switchesKeys == filter ||
                product.productFamily == filter ||
                product.deviceId == filter
                ) filteredProducts.push(product)
            })
        })
    }
    
    if(searchParams.toString() == ''){
        filteredProducts = data?.data;
    }

    return(
        <>
            <div className={styles.productsContainer}>
                <div className={styles.additionalInfo}>
                    <div className={styles.productsSort}>
                        <ProductsSorting sortSetter={setTriage}/>
                    </div>
                    <p className={styles.productsCount}>{filteredProducts.length} products</p>
                </div>
                <div className={styles.productsBlock}>
                    {
                        filteredProducts.map(i => {
                            return(
                                <ItemCard productRoute={`/store/${params.slug}/${i.id}`} key={crypto.randomUUID()} deviceInfo={i}></ItemCard>
                                )
                            })
                        }
                </div>
            </div>
        </>
    )
}