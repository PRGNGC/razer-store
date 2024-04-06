import { CommonAxios } from "@/shared/api";

async function getProduct(category: string, id: string){
    const response = await CommonAxios.get(`${category}/${id}`);
    return response.data
}

export { getProduct }