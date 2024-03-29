'use client'
import styles from './styles.module.scss'
import { getStores } from '../location-map/api'
import { ButtonLink } from '@/shared/ui/button-link'
import { useQuery } from '@tanstack/react-query'

interface CountryType {
  value: string,
  label: string, 
  latitude: number, 
  longitude: number, 
  zoom: number
}

interface LocationStoreType {
  country: CountryType
}

interface StoreType{
  storeImg: string,
  storeTitle: string,
  storeText: string,
  storeLocationLatitude: number,
  storeLocationLongitude: number,
  storeCountry: string
}

export function LocationStore({ country }: LocationStoreType){
    
  const {isLoading, isError, data, error} = useQuery({queryKey: ['stores'], queryFn: getStores})

  if(isLoading){
    return <p>Loading...</p>
  }
  
  if(isError){
    return <p>{error.message}</p>
  }

    return(
        <div className={styles.storesCards}>
        {data?.map((store: StoreType) => {
          if(store.storeCountry == country.label){
            return(
              <div key={crypto.randomUUID()} className={styles.storeCardContainer}>
                  <div className={styles.storeImg} style={{backgroundImage: 'url("' + store.storeImg + '")'}}></div>
                  <h2 className={styles.storeTitle}>{store.storeTitle}</h2>
                  <p className={styles.storeText}>{store.storeText}</p>
                  <ButtonLink element='' color='green'>VISIT STORE</ButtonLink>
              </div>
            )
          }
        })}
      </div>
    )
}