import { CommonAxios } from "@/shared/api"
import { ReviewType } from "@/shared/types"

interface addNewReviewType {
    category: string,
    id: string,
    updatedReviews: ReviewType[]
}

interface updateReviewType {
    category: string,
    id: string,
    review: ReviewType
}

async function addNewReview({category, id, updatedReviews}: addNewReviewType){
    const response = await CommonAxios.patch(`${category}/${id}`, {deviceReviews: updatedReviews})
}

async function updateReview({category, id, review}: updateReviewType){
    const response = await CommonAxios.patch(`${category}/${id}/reviews`, review)
}

export { addNewReview, updateReview }