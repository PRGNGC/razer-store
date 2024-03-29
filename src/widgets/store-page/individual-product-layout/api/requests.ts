import { CommonAxios } from "@/shared/api";

async function getProduct(category: string, productId: string){
    const response = await CommonAxios.get(`/${category}/${productId}`);
    return response.data
}

export { getProduct }