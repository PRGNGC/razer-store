'use client'
import styles from './styles.module.scss'
import { useState } from 'react';
import { ModalWindow } from '../../modal-window';
import { getCountries } from '../api';
import { useSelector, useDispatch } from 'react-redux'
import { country, countryChange } from '@/features/store/country/countrySlice';
import { useQuery } from '@tanstack/react-query';


export function CountrySelect(){
    const dispatch = useDispatch()
    const currentCountry = useSelector((state) => state.countryReducer.country)
 
    const [isOpen, setIsOpen] = useState(false);
    
    console.log("render")
    
    const { isLoading, isError, data, error } = useQuery({queryKey: ["countries"], queryFn: getCountries})

    if(isLoading){
        return<p>Loading...</p>
    }
    
    if(isError){
        return<p>{error.message}</p>
    }

    return(
        <div className={`${styles.countrySelect} countrySelect`}>
        <p className={styles.currentCountry}>{currentCountry}</p>
        <p className={styles.changeCountry} onClick={() => {
            document.querySelector('body').style = 'overflow-y: hidden';
            setIsOpen(true)
        }}>Change Location &#8250;</p>
        <ModalWindow handleClose={() => setIsOpen(false)} isOpen={isOpen}>
            <section className={styles.countriesBlock}>
            <div className={styles.container}>
                <h1 className={styles.modalTitle}>Select your shipping destination</h1>
                <p className={styles.CountriesBlockText}>Select a location to view relevant pricing, availability and delivery options and shop online. Please be advised that the contents of your cart will be removed when you change your location.</p>
                {
                    data.map(place => {
                        return(
                            <div key={crypto.randomUUID()} className={styles.regionBlock}>
                                <h1 className={styles.regionTitle}>{place.region}</h1>
                                <div className={styles.regionsCountries}>
                                {
                                    place.countries.map(country => {
                                        return(
                                            <div
                                                key={crypto.randomUUID()}
                                                onClick={() => 
                                                    {
                                                        dispatch(countryChange({country: country.country, mapCountry: country.mapLocation}));
                                                        setIsOpen(false);
                                                        document.querySelector('body').style = 'overflow-y: scroll';
                                                    }
                                                }
                                                className={styles.regionsCountry}>
                                                <p className={styles.countryName}>{country.country}</p>
                                                <p className={styles.countryLanguage}>{country.language}</p>
                                            </div>
                                        )
                                    })
                                }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
        </ModalWindow>
    </div>
    )
}