import { CommonAxios } from "@/shared/api";
import axios from "axios";

async function getAllCategoryProducts(category: string, filters: URLSearchParams, page: number){
    // const response = await CommonAxios.get(`gear?_beign=2&_end=4`);
    let elementsPerPage = 5;
    let lastElement = page * elementsPerPage;
    let firstElement = lastElement - elementsPerPage;

    // const response = await CommonAxios.get(`${category}?_start=${firstElement}&_end=${lastElement}${filters}`);
    const response = await CommonAxios.get(`${category}`);
    // const response = fetch('http://localhost:8000?page=' + page).then((res) => res.json())
    return response
}

export { getAllCategoryProducts }