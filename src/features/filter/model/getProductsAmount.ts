import { getAllCategoryProducts } from "./api";
import { useQuery } from "@tanstack/react-query";

export function getProductsAmount(currentCategory: string, products: {}){
    // const {isPending, isError, data, error} = useQuery({queryKey: ['prod', currentCategory], query   Fn: () => getAllCategoryProducts(currentCategory)})

    console.log(products)
    console.log(currentCategory)
}