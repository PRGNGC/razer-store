import axios from 'axios'

const baseUrl = 'http://localhost:8000/advertisements';

async function getAdvertisements(){
    const response = await axios.get(baseUrl);
    return response.data
}

export { getAdvertisements }