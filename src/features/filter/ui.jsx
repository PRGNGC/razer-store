import styles from './styles.module.scss'
import { getFilters, getAllCategoryProducts } from './api'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

function formString(filter){
    let filterArr = filter.toLowerCase().split('')
    let deviders = [' ', '/', '-'];

    for(let i = 0; i <= filterArr.length; i++){
        if(deviders.includes(filterArr[i])) filterArr[i+1] = filterArr[i+1].toUpperCase()
    }
    
    let newStr = filterArr.join('')
   
    for(let i = 0; i <= deviders.length; i++){
        newStr = newStr.replace(deviders[i], '');
    }

    return newStr
}

export function Filter({ filters,  filtersSetter }){
    const [selectedFilters, setSelectedFilters] = useState([]);
    const searchParams = useSearchParams();
    const router = useRouter();
    const editableSearchParams = new URLSearchParams(searchParams.toString());
    console.log("Just formed editable serach params - " + editableSearchParams);

    let cat = "keyboards"

    const {isLoading, isError, data, error} = useQuery({queryKey: ['filters', cat], queryFn: () => getFilters(cat)})
    
    if(isLoading){
        return <p>Loading...</p>
    }
    
    if(isError){
        return <p>{error.message}</p>
    }

    return(
        <div className={styles.filtersBlock}>
            <div className={styles.appliedFiltersBlock}>
                <div className={styles.appliedFiltersHeader}>
                    <p className={styles.appliedFiltersTitle}>Applied Filters</p>
                    <p className={styles.appliedFiltersNullify} onClick={ () => setSelectedFilters([])}>Clear All</p>
                </div>
                <div className={styles.appliedFiltersList}>

                {
                    selectedFilters.map(i => {
                        return(
                            <div key={crypto.randomUUID()} className={styles.selectedFilter}>
                                <p className={styles.selectedFilterName}>{i}</p>
                                <Image 
                                    src='/icons/green-cross.svg' 
                                    alt='cross'
                                    className={styles.deleteAppliedFilter} 
                                    width={24} 
                                    height={24}  
                                    onClick={ () => { setSelectedFilters((prev) => prev.filter(j => j != i)) } }
                                    
                                />
                            </div>
                        )
                    })
                }
                </div>
            </div>

            <div className={styles.filters}>
                {
                    data[0]?.filt.map(j => 
                        {
                            return(
                                <div key={crypto.randomUUID()} className={styles.filterCategory}>
                                    <p className={styles.filterCategoryName}>{j.filterName}</p>
                                    {
                                        j.possibleValues.map(i => {
                                            return(
                                                <label key={crypto.randomUUID()} htmlFor={i} className={styles.filterCategoryOption}>
                                                    <input type="checkbox" defaultChecked={selectedFilters.includes(i)} id={i} 
                                                        onClick={() => setSelectedFilters((prev) => {
                                                            if(!prev.includes(i)) { 
                                                                editableSearchParams.append(j.filterName, i)
                                                                console.log("Updated search params - " + editableSearchParams);
                                                                router.push(`/store/keyboards?${editableSearchParams}`);
                                                                return [...prev, i] 
                                                            }
                                                            if(prev.includes(i)) { 
                                                                router.push(`/store/keyboards?${editableSearchParams.delete(j.filterName)}`);
                                                                return prev.filter(j => j != i) 
                                                            }
                                                        })}
                                                    />
                                                    {i}
                                                </label>
                                                )
                                            })
                                        }
                                </div>
                                
                            )
                        }
                    )
                }
            </div>

        </div>
    )
}