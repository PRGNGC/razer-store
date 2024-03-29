import { BlockTitle } from "@/entities/block-title/ui"
import { ButtonLink } from "@/shared/ui/button-link"

export function MobileTitle(){
    return(
        <BlockTitle header='MOBILE' text='GAMING AND LIFESTYLE GEAR FOR SEAMLESS ENTERTAINMENT WITH YOUR PHONE OR TABLET'>
            <ButtonLink element='/store/mobile' color='white'>SEE ALL</ButtonLink>
        </BlockTitle>
    )
}