import { InitialBlock } from "@/widgets/main-page/initial-block" 
import { NewsBlock } from "@/widgets/main-page/news-block" 
import { AdvBlock } from "@/widgets/main-page/adv-block"
import { ExcBlock } from "@/widgets/main-page/exc-block"
import { CategoriesBlock } from "@/widgets/main-page/categories-block"
import { LocationBlock } from "@/widgets/main-page/location-block"

export function MainPage(){
    return(
        <>
            <InitialBlock />
            <NewsBlock />
            <AdvBlock />
            <ExcBlock />
            <CategoriesBlock />
            <LocationBlock />
        </>
    )
}