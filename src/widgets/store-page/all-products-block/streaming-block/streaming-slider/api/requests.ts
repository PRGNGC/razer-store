import { CommonAxios } from '@/shared/api';

async function getSeveralStreaming(){
    // const response = await CommonAxios.get('streaming/?_limit=5');
    const response = await CommonAxios.get('streaming', {
        params: {
          _limit: 5
        }
      });
    return response.data
}

export { getSeveralStreaming }
