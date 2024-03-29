import { BlockTitle } from "@/entities/block-title/ui"
import { ButtonLink } from "@/shared/ui/button-link"

export function MiceTitle(){
    return(
        <BlockTitle header='GAMING MICE' text='HIGH-PERFORMANCE WIRED AND WIRELESS MICE MADE FOR EVERY GAMER`S HAND'>
            <ButtonLink element='/store/mice' color='white'>SEE ALL</ButtonLink>
        </BlockTitle>
    )
}