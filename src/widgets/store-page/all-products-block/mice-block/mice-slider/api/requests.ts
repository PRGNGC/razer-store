import { CommonAxios } from '@/shared/api';

async function getSeveralMice(){
    // const response = await CommonAxios.get('laptops/?_limit=5');
    const response = await CommonAxios.get('mice', {
        params: {
          _limit: 5
        }
      });
    return response.data
}

export { getSeveralMice }
