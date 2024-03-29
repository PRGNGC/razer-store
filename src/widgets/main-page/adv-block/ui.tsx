'use client'
import './styles.scss'
import { ButtonLink } from '@/shared/ui/button-link'
import { SliderTemplate } from '@/features/slider'
import { useQuery } from '@tanstack/react-query'
import { getAdvertisements } from './api'
import Image from 'next/image'

interface AdvertisementType {
    advTitle: string,
    advText: string,
    advImg: string,
}

export function AdvBlock(){
    const { isLoading, isError, data, error } = useQuery({ queryKey: ['advertisements'], queryFn: getAdvertisements})

    if(isLoading){
        return <p>Loading...</p>
    }

    if(isError){
        return <p>{error.message}</p>
    }

    return( 
        <section className='advertisementBlock'>
            <div className='container'>
                <div className="con"></div>

                    <SliderTemplate personalSettings={{
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        responsive: [
                            {
                              breakpoint: 768,
                              settings: {
                                arrows: false,
                                swipe: true,
                              }
                            },
                          ]
                    }}>
                        {
                            data?.map((i: AdvertisementType) => {
                                return(
                                <div key={crypto.randomUUID()} className='advertisement' style={{backgroundImage: 'url("' + i.advImg + '")'}}>
                                    {/* <Image className='advImg' src={i.advImg} alt={i.advTitle} width={100} height={100} /> */}
                                    <div className='advInfo'>
                                        <h1 className='advTitle'>{i.advTitle}</h1>
                                        <hr />
                                        <p className='advText'>{i.advText}</p>
                                    </div>
                                    <ButtonLink element='' color='green'>SHOP NOW</ButtonLink>

                                </div>)
                            })
                        }
                    </SliderTemplate>

            </div>
        </section>
    )
}