'use client'
import { getExclusives } from '../api';
import { SliderTemplate } from '@/features/slider/ui'
import { ItemCard } from '@/entities/item-card';
import { useQuery } from '@tanstack/react-query';

interface ExclusivesType {
  deviceId: string, 
  deviceType: string,
  deviceAddInfo: string,
  devicePriceOff: boolean,
  deviceExclusive: boolean,
  deviceNew: boolean,
  deviceOtherInfo: boolean,
  deviceImg: string,
  deviceRating: string,
  deviceReviewsCount: string,
  deviceTitle: string,
  deviceActualPrice: string,
  deviceOldPrice: string
} 

export function ExcSlider(){
  const {isLoading, isError, data, error} = useQuery({queryKey: ['exclusives'], queryFn: getExclusives})

  if(isLoading){
    return <p>Loading...</p>
  }
  
  if(isError){
    return <p>{error.message}</p>
  }

    return(
        <SliderTemplate personalSettings={{
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1300,
                  settings: {
                    slidesToShow: 3,
                  }
                },
                {
                  breakpoint: 1000,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                    breakpoint: 769,
                    settings: {
                      arrows: false,
                      dots: false, 
                    },
                  },
                {
                  breakpoint: 768,
                  settings: "unslick"
                },
              ]
        }}>
            {
                data?.map((i: ExclusivesType) => <ItemCard productRoute='' key={crypto.randomUUID()} deviceInfo={i}></ItemCard>)
            }
        </SliderTemplate>
    )
}