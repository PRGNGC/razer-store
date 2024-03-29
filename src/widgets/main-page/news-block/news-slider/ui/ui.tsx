'use client'
import { SliderTemplate } from "@/features/slider";
import styles from './styles.module.scss'
import Link from "next/link";
import { getNews } from "../api";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "@/shared/ui/loader";

interface NewsType {
    title: string,
    text: string,
    type: string,
    img: string,
    size: number,
}

export function NewsSlider(){
    const { isPending, isError, data, error } = useQuery({ queryKey: ['news'], queryFn: getNews})

    if(isPending){
        // return(<Loader/>);
        return(<p>loading...</p>);
    }
    if(isError){
        return(<p>{error.message}</p>);
    }

    const maxCapacity = 4;
    let pagesCount = new Array(Math.ceil(data?.reduce((sum: number, current: NewsType) => sum + current.size, 0) / maxCapacity)).fill(1);
    let currentLoading = 0;
    let nextNew = 0;

    return(
        <section className={styles.newsBlock}>
            <div className={styles.container}>
                <div className={styles.newsBlockContent}>
                    <div className={styles.smallSlider}>
                        {
                            data?.map((i: NewsType) => {
                                return(
                                    <div key={crypto.randomUUID()} className={styles.newCard} style={{backgroundImage: 'url(' + i.img + ')'}}> 
                                        <Link href='/' className={styles.cardLink} />
                                        <div className={styles.newType}>{i.type}</div>
                                        <h1 className={styles.newTitle}>{i.title}</h1>
                                        <p className={styles.newText}>{i.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <SliderTemplate personalSettings={{        
                                rows: 2,
                                slidesPerRow: 1,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                responsive: [
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
                                pagesCount.map(i => {
                                    currentLoading = 0;
                                    return(
                                    <div key={crypto.randomUUID()} className={styles.newsSlider}>   
                                        {data?.map((i: NewsType, index: number) => {
                                            if(maxCapacity <= currentLoading) return;
                                            if(index >= nextNew){
                                                if(currentLoading + i.size > maxCapacity) return;
                                                currentLoading += i.size;
                                                nextNew = index+1;
                                                return(
                                                    <div key={crypto.randomUUID()} className={styles.newCard} style={{backgroundImage: 'url(' + i.img + ')', maxWidth: i.size == 2 ? 738 + 'px' : 320 + 'px'}}>
                                                        <Link href='/' className={styles.cardLink} />
                                                        <div className={styles.newType}>{i.type}</div>
                                                        <h1 className={styles.newTitle}>{i.title}</h1>
                                                        <p className={styles.newText}>{i.text}</p>
                                                    </div>
                                                )
                                            }
                                        }
                                        )}  
                                    </div>)
                                })
                            }
                        </SliderTemplate>
                </div>
            </div>
        </section>
    )
}