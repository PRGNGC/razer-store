import { CommonAxios } from '@/shared/api';

async function getSeveralLaptops(){
    // const response = await CommonAxios.get('laptops/?_limit=5');
    const response = await CommonAxios.get('laptops', {
        params: {
          _limit: 5
        }
      });
    return response.data
}

export { getSeveralLaptops }
