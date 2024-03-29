import { SeparateProductsBlock } from "@/widgets/store-page/separate-products-block"

export default function Category({params}){
    // return(<>Category {params.slug}</>)
    return(
        <SeparateProductsBlock category={params.slug}/>
    )
}