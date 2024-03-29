import { CommonAxios } from '@/shared/api';

async function getSeveralMobile(){
    // const response = await CommonAxios.get('Mobile/?_limit=5');
    const response = await CommonAxios.get('mobile', {
        params: {
          _limit: 5
        }
      });
    return response.data
}

export { getSeveralMobile }
