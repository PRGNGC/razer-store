'use client'
import styles from './styles.module.scss'
import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

interface IndividualProductSliderType {
    mainGallery: string[]
    thumbsGallery: string[]
}

export function IndividualProductSlider({mainGallery, thumbsGallery}: IndividualProductSliderType){
    const [nav1, setNav1] = useState<MutableRefObject<null> | null>(null);
    const [nav2, setNav2] = useState<MutableRefObject<null> | null>(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
      }, []);

    return(
    <div className="slider-container">
      <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
        {
            mainGallery.map(img => {
                return(
                    <>
                        <div style={{marginTop: '25px'}}>
                            <Image src={img} alt='image' width={1520} height={600}/>
                        </div>
                    </>
                )
            })
        }
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={slider => (sliderRef2 = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        {
            thumbsGallery?.map(img => {
                return(
                    <>
                        <div style={{marginTop: '25px'}}>
                            <Image src={img} alt='image' width={230} height={150}/>
                        </div>
                    </>
                )
            })
        }
      </Slider>
    </div>
    )
}