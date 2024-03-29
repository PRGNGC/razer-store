import { CommonAxios } from "@/shared/api";

async function getAllCategoryProducts(currentCategory: string){
    // const response = await CommonAxios.get(category);
    // const response = await CommonAxios.get(`${category}?${filters}`);
    const response = await CommonAxios.get(currentCategory);
    return response.data
  }

export { getAllCategoryProducts }