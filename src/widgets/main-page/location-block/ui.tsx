'use client'
import styles from './styles.module.scss'
import { LocationTitle } from './location-title'
import { LocationMap } from './location-map/ui'
import { useState, useEffect } from 'react'
import { LocationStore } from './location-stores'
import { SubscriptionForm } from './subscription-form'
import { getStoresCountries } from './api'
import { useSelector } from 'react-redux'
import { useQuery } from '@tanstack/react-query'

export function LocationBlock(){   
    const [currentMapCountry, setCurrnetMapCountry] = useState({ value: 'Singapore', label: 'Singapore', latitude: 1.372501, longitude: 103.801277, zoom: 11 });

    return(
        <section className={styles.locationsBlock}>
            <div className={styles.container}>
                <LocationTitle toggleCountry={setCurrnetMapCountry} country={currentMapCountry}></LocationTitle>
                <LocationMap country={currentMapCountry}></LocationMap>
                <LocationStore country={currentMapCountry}></LocationStore>
                <SubscriptionForm></SubscriptionForm>
            </div>
        </section>
    )
}