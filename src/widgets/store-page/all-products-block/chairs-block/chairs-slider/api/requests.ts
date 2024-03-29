import { CommonAxios } from '@/shared/api';

async function getSeveralChairs(){
    // const response = await CommonAxios.get('laptops/?_limit=5');
    const response = await CommonAxios.get('chairs', {
        params: {
          _limit: 5
        }
      });
    return response.data
}

export { getSeveralChairs }
