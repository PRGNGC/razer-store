import { CommonAxios } from '@/shared/api';

async function getSeveralGear(){
    // const response = await CommonAxios.get('Gear/?_limit=5');
    const response = await CommonAxios.get('gear', {
        params: {
          _limit: 5
        }
      });
    return response.data
}

export { getSeveralGear }
