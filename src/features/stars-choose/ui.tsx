'use client'
import { Console } from 'console';
import styles from './styles.module.scss'
import { Dispatch, SetStateAction, useState } from 'react'

interface StarsChooseType {
    currentStar: number,
    currentClickedStar: number,
    setCurrentStar: Dispatch<SetStateAction<number>>,
    setCurrentClickedStar: Dispatch<SetStateAction<number>>,
}

export function StarsChoose({currentStar, currentClickedStar, setCurrentStar, setCurrentClickedStar}: StarsChooseType){
    // const [currentStar, setCurrentStar] = useState<number>(0);
    // const [currentClickedStar, setCurrentClickedStar] = useState<number>(0);

    return(
        <div className={styles.starsChooseContainer}>
            <span 
                onMouseOut={() => {
                    setCurrentStar(0)
                    console.log(currentStar)
                }} 
                onMouseOver={() => {
                    setCurrentStar(1)
                    console.log(currentStar)
                }} 
                onClick={() => {
                    if(currentClickedStar == 1) return setCurrentClickedStar(0)
                    setCurrentClickedStar(1)
                }}
                className={(currentClickedStar || currentStar ) < 1 ? styles.star : styles.currentStar}>
                    ★
            </span>
            <span 
                onMouseOut={() => {
                    setCurrentStar(0)
                    console.log(currentStar)

                }} 
                onMouseOver={() => {
                    setCurrentStar(2)
                    console.log(currentStar)

                }} 
                onClick={() => {
                    if(currentClickedStar == 2) return setCurrentClickedStar(0)
                    setCurrentClickedStar(2)
                }}
                className={(currentClickedStar || currentStar) < 2 ? styles.star : styles.currentStar}>
                    ★
            </span>
            <span 
                onMouseOut={() => {
                    setCurrentStar(0)
                    console.log(currentStar)

                }} 
                onMouseOver={() => {
                    setCurrentStar(3)
                    console.log(currentStar)

                }} 
                onClick={() => {
                    if(currentClickedStar == 3) return setCurrentClickedStar(0)
                    setCurrentClickedStar(3)
                }}
                className={(currentClickedStar || currentStar) < 3 ? styles.star : styles.currentStar}>
                    ★
            </span>
            <span 
                onMouseOut={() => {
                    setCurrentStar(0)
                    console.log(currentStar)

                }} 
                onMouseOver={() => {
                    setCurrentStar(4)
                    console.log(currentStar)

                }} 
                onClick={() => {
                    if(currentClickedStar == 4) return setCurrentClickedStar(0)
                    setCurrentClickedStar(4)
                }}
                className={(currentClickedStar || currentStar) < 4 ? styles.star : styles.currentStar}>
                    ★
            </span>
            <span 
                onMouseOut={() => {
                    setCurrentStar(0)
                    console.log(currentStar)

                }} 
                onMouseOver={() => {
                    setCurrentStar(5)
                    console.log(currentStar)

                }} 
                onClick={() => {
                    if(currentClickedStar == 5) return setCurrentClickedStar(0)
                    setCurrentClickedStar(5)
                }}
                className={(currentClickedStar || currentStar) < 5 ? styles.star : styles.currentStar}>
                    ★
            </span>
        </div>
    )
}