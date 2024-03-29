import axios from "axios"

const commonUrl = 'http://localhost:8000/';

const CommonAxios = axios.create({
    baseURL: commonUrl
});

export { CommonAxios }