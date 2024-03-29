import { CommonAxios } from "@/shared/api";
import axios from "axios";
import { Prosto_One } from "next/font/google";

interface ProductType {
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
    deviceActualPrice: number,
    deviceOldPrice: string
}

async function addProductCart (product: ProductType){
    return await axios.post('http://localhost:8000/usersCart', Object.assign(product, {deviceAmount: 1}))
}

async function deleteProductCart (id: string){
    return await CommonAxios.delete(`/usersCart/${id}`)    
}

export { addProductCart, deleteProductCart }