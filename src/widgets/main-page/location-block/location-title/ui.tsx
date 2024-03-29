import styles from './styles.module.scss'
import { BlockTitle } from '@/entities/block-title'
import { MapCountrySelect } from '@/features/map-country-select'
import { Dispatch, SetStateAction } from 'react';

interface CountryType {
    value: string,
    label: string, 
    latitude: number, 
    longitude: number, 
    zoom: number
}

interface LocationTitleProps{
    toggleCountry: Dispatch<SetStateAction<CountryType>>,
    country: CountryType
}

export function LocationTitle({toggleCountry, country}: LocationTitleProps){
    return(
        <BlockTitle header='RAZERSTORE LOCATIONS' text='Experience the unfair advantage yourself with the ultimate Razer experience.'>
            <MapCountrySelect country={toggleCountry} currentCountry={country}></MapCountrySelect>
        </BlockTitle>
    )
}