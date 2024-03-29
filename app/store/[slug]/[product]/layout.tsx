import { IndividualProductLayout } from "@/widgets/store-page/individual-product-layout"
import { IndividualProductNav } from "@/widgets/store-page/individual-product-layout/individual-product-nav";

interface ParamsType {
    slug: string;
    product: string;
}

interface ProductLayoutType {
    children: React.ReactNode
    params: ParamsType
}

export default function ProductLayout({ children, params }: ProductLayoutType) {
    return(
        <>
            <IndividualProductLayout category={params.slug} productId={params.product}/>
            <IndividualProductNav />
            {children}
        </>
    )
}