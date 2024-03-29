import { CommonAxios } from "@/shared/api";

async function getAllCartProducts(){
    const response = await CommonAxios.get('/usersCart');
    return response.data;
}

interface PatchTypeProps {
    newAmount: number,
    id: string
}

// async function changeProductAmount(newAmount: number, id: string){
async function changeProductAmount(data: PatchTypeProps){
    const response = await CommonAxios.patch(`/usersCart/${data.id}`, { deviceAmount: data.newAmount });
    return response.data;
}

export { getAllCartProducts, changeProductAmount }