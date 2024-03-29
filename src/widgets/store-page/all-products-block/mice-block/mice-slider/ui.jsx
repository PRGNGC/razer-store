import styles from './styles.module.scss'
import { SliderTemplate } from '@/features/slider'
import { useQuery } from '@tanstack/react-query'
import { getSeveralMice } from './api'
import { ItemCard } from '@/entities/item-card'

export function MiceSlider(){
    const {isLoading, isError, data, error} = useQuery({queryKey: ['mice'], queryFn: getSeveralMice})

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
                  data?.map(i => <ItemCard key={crypto.randomUUID()} productRoute={`/store/mice/${i.id}`} deviceInfo={i}></ItemCard>)
              }
          </SliderTemplate>
      )
}