import { CommonAxios } from '@/shared/api';

async function getSeveralAudio(){
    // const response = await CommonAxios.get('laptops/?_limit=5');
    const response = await CommonAxios.get('audio', {
        params: {
          _limit: 5
        }
      });
    return response.data
}

export { getSeveralAudio }
