import { CommonAxios } from '@/shared/api';

async function getSeveralConsole(){
    // const response = await CommonAxios.get('Console/?_limit=5');
    const response = await CommonAxios.get('console', {
        params: {
          _limit: 5
        }
      });
    return response.data
}

export { getSeveralConsole }
