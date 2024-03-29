import axios from "axios"
const storesUrl = 'http://localhost:8000/stores'

async function getStores(){
  const response = await axios.get(storesUrl)
  return response.data
}

export { getStores }