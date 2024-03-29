import { BlockTitle } from "@/entities/block-title/ui"
import { ButtonLink } from "@/shared/ui/button-link"

export function ChairsTitle(){
    return(
        <BlockTitle header='GAMING CHAIRS' text='AWARD-WINNING ERGONOMICS AND COMFORT FOR COUNTLESS HOURS OF GAMING'>
            <ButtonLink element='/store/chairs' color='white'>SEE ALL</ButtonLink>
        </BlockTitle>
    )
}