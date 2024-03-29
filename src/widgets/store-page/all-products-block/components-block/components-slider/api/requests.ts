import { CommonAxios } from '@/shared/api';

async function getSeveralComponents(){
    // const response = await CommonAxios.get('components/?_limit=5');
    const response = await CommonAxios.get('components', {
        params: {
          _limit: 5
        }
      });
    return response.data
}

export { getSeveralComponents }
