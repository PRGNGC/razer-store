import { BlockTitle } from "@/entities/block-title/ui"
import { ButtonLink } from "@/shared/ui/button-link"

export function LaptopsTitle(){
    return(
        <BlockTitle header='THE RAZER BLADE' text='17” GeForce RTX™ 30 Series gaming laptops with up to Intel® Core™ i9-12900H'>
            <ButtonLink element='/store/laptops' color='white'>SEE ALL</ButtonLink>
        </BlockTitle>
    )
}