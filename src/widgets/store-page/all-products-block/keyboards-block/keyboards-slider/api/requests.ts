import { CommonAxios } from '@/shared/api';

async function getSeveralKeyboards(){
    // const response = await CommonAxios.get('laptops/?_limit=5');
    const response = await CommonAxios.get('keyboards', {
        params: {
          _limit: 5
        }
      });
    return response.data
}

export { getSeveralKeyboards }
