import { BlockTitle } from "@/entities/block-title/ui"
import { ButtonLink } from "@/shared/ui/button-link"

export function KeyboardsTitle(){
    return(
        <BlockTitle header='GAMING KEYBOARDS' text='FULL-SIZED, TENKEYLESS, AND 60% KEYBOARDS'>
            <ButtonLink element='/store/keyboards' color='white'>SEE ALL</ButtonLink>
        </BlockTitle>
    )
}