export interface ReviewType {
    reviewText: string,
    reviewAuthor: string,
    reviewDate: Date,
    reviewRate: number,
}

export interface ProductType {
    deviceType: string,
    deviceAddInfo: string,
    devicePriceOff: boolean,
    deviceExclusive: boolean,
    deviceNew: boolean,
    deviceOtherInfo: boolean,
    deviceImg: string,
    deviceMainGallery: string[],
    deviceThumbsGallery: string[],
    deviceRating: string,
    deviceReviewsCount: string,
    deviceTitle: string,
    deviceActualPrice: number,
    deviceOldPrice: string,
    deviceAmount: number,
    id: string,
    deviceReviews: ReviewType[],
    // deviceReviews: {
    //       reviewText: string,
    //       reviewAuthor: string,
    //       reviewRate: number,
    //       reviewDate: Date
    //     }[],
    deviceFeatures: {
        features: string[],
        values: string[]
    }
}

export interface ParamsType {
    slug: string,
    product: string,
    productTab: string,
}