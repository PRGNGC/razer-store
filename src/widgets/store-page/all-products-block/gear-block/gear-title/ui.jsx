import { BlockTitle } from "@/entities/block-title/ui"
import { ButtonLink } from "@/shared/ui/button-link"

export function GearTitle(){
    return(
        <BlockTitle header='GEAR' text='LIFESTYLE ACCESSORIES AND APPAREL FOR THE GAMING COMMUNITY'>
            <ButtonLink element='/store/gear' color='white'>SEE ALL</ButtonLink>
        </BlockTitle>
    )
}