'use client'
import styles from './styles.module.scss'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ReviewType, ParamsType } from '@/shared/types'
import { addNewReview, updateReview } from './api'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { StarsChoose } from '@/features/stars-choose'
import { useParams } from 'next/navigation'

interface IndividualProductReviewType {
    reviews: ReviewType[]
}

export function IndividualProductReview({reviews}: IndividualProductReviewType){
    const [currentStar, setCurrentStar] = useState<number>(0);
    const [currentClickedStar, setCurrentClickedStar] = useState<number>(0);

    const params = useParams();

    let textValue = useRef<HTMLTextAreaElement>(null);

    const queryClient = useQueryClient();

    const add = useMutation({
        mutationFn: addNewReview,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["prod"]})
        }
    })

    const update = useMutation({
        mutationFn: updateReview,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["prod"]})
        }
    })

    return(
        <div className={styles.reviewsContent}>
            <div className={styles.addNewReviewForm}>
                <form onSubmit={ (e) => { e.preventDefault() } }>
                    <textarea ref={textValue} name="" required id="" placeholder='Enter text...' className={styles.newReviewField}></textarea>
                    <StarsChoose 
                        currentStar={currentStar} 
                        currentClickedStar={currentClickedStar} 
                        setCurrentStar={setCurrentStar}
                        setCurrentClickedStar={setCurrentClickedStar}>
                    </StarsChoose>
                    <button 
                        className={styles.postReviewButton}
                        onClick={() => {
                            if(textValue.current?.value == '') return 

                            if(textValue.current){ 
                                add.mutate({ category: params?.slug as string, id: params?.product as string, updatedReviews: [{
                                    reviewText: textValue.current.value as string,
                                    reviewAuthor: 'user',
                                    reviewRate: currentClickedStar,
                                    reviewDate: new Date()
                                }, ...reviews,]})

                                setCurrentClickedStar(0);
                                textValue.current.value = '';   
                            }
                        }}
                    >
                        Post review
                    </button>
                </form>
            </div>

            <div className={styles.otherPost}>Other reviews{`(${reviews?.length}):`}</div>
            {
                reviews?.map((review: ReviewType) => {
                    return(
                        <div key={crypto.randomUUID()} className={styles.reviewContent}>
                            <div className={styles.reviewCommonInfo}>
                                <Image src='/icons/star.svg' width={50} height={50} alt='photo' className={styles.reviewAuthorPhoto}/>
                                <p className={styles.reviewAuthorNick}>{review.reviewAuthor}</p>
                                <p className={styles.reviewDate}>{JSON.stringify(review.reviewDate)}</p>
                                <div className={styles.reviewRate}>
                                    {review.reviewRate}
                                    <Image 
                                        src="/icons/star.svg"
                                        alt='star'
                                        width={24}
                                        height={24}
                                    />
                                </div>
                            </div>                            
                            <p className={styles.reviewText}>{review.reviewText}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}