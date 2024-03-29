import { BlockTitle } from "@/entities/block-title/ui"
import { ButtonLink } from "@/shared/ui/button-link"

export function ComponentsTitle(){
    return(
        <BlockTitle header='PC COMPONENTS' text='BUILD THE PERFECT GAMING RIG FROM OUR SELECTION OF TOP-SHELF PC PARTS'>
            <ButtonLink element='/store/components' color='white'>SEE ALL</ButtonLink>
        </BlockTitle>
    )
}