'use client'
import { useContext, useState } from 'react'
import { Filter } from '@/features/filter'
import { ProductsBlock } from '../products-block'
import styles from './styles.module.scss'
import { useQuery } from '@tanstack/react-query'
// import { getAllCategoryProducts } from './api'
import { CategoryContext } from '@/pages/all-products/ui'

export function SeparateProductsBlock({category}){
    const [currentFilters, setCurrentFilters] = useState([]);
    // const [currentFilters, setCurrentFilters] = useState({});

    // function addFilterHandler(newFilter){
    //     setCurrentFilters((prev) => {
    //         // if(prev?.includes(newFilter)) return
    //         [...prev, newFilter]
    //     })
    // }

    // console.log(category);

    // console.log(currentFilters);
    
    const arrToObj = currentFilters.reduce((obj, item) => Object.assign(obj, { [item.filter]: item.value }), {})
    
    // console.log(Object.assign(arrToObj, { "mixed": "true" }));
    // console.log(arrToObj);
    // const {currentCategory, setCurrentCategory} = useContext(CategoryContext);

    // const category = 'laptops';

    // const {isLoading, isError, data, error} = useQuery({queryKey: ['products', currentCategory, currentFilters], queryFn: () => getAllCategoryProducts})

    // if(isLoading){
    //     return <p>Loading...</p>
    // }

    // if(isError){
    //     return <p>{error.message}</p>
    // }

    // const formatParams = '';
    const formatParams = new URLSearchParams(arrToObj).toString();
    // const formatParams = new URLSearchParams({deviceReviewsCount: '150'}).toString();
    console.log(formatParams);
    return(<>
        <div className={styles.container}>
            <div className={styles.filterBlock}>
                <Filter filters={currentFilters} filtersSetter={setCurrentFilters}></Filter>
            </div>
            <div className={styles.productsBlock}>
                <ProductsBlock category={category} filters={formatParams}></ProductsBlock>
            </div>

        </div>
    </>)
}