import axios from "axios"
const countriesUrl = 'http://localhost:8000/countries'

// const getNews = async () => {
//   const response = await axios.get(newsUrl)
//         .then(response => response.data)
//         .catch(error => {
//           console.log(error);
//         });
//   return response
// }

async function getCountries(){
  const response = await axios.get(countriesUrl)
  return response.data
}

// const getAdvertisements = async () => {
//   const response = await axios.get(advertisementsUrl)
//   return response.data
// }

// const addContact = async (contact: {}) => {
//   const response = await axios.post(baseUrl, contact)
//   return response.data
// }

// const deleteContact = async (id: number) => {
//   const response = await axios.delete(`${baseUrl}/${id}`)
//   return response.data
// }

// export default { getAll, addContact, deleteContact }


export { getCountries }