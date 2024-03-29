import { IndividualProductContent } from "@/widgets/store-page/individual-product-layout/individual-product-content"

interface ParamsType {
    slug: string,
    product: string,
    productTab: string,
}

interface ProductIdType{
    params: ParamsType
}

export default function ProductIt({params}: ProductIdType){
    return(
        <IndividualProductContent tab={params.productTab}/>
    )
}