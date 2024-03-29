import axios from "axios"
const exclusivesUrl = 'http://localhost:8000/exclusives'

async function getExclusives(){
  const response = await axios.get(exclusivesUrl)
  return response.data
}

export { getExclusives }