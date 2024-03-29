import axios from "axios";

const storesCountriesUrl = 'http://localhost:8000/storesCountries';

async function getStoresCountries(){
    const response = await axios.get(storesCountriesUrl);
    return response.data;
}

export { getStoresCountries }