import axios from "axios"
import { CommonAxios } from "@/shared/api"

async function getNews(){
  const response = await CommonAxios.get('news') 
  return response.data
}

export { getNews }