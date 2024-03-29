import { BlockTitle } from "@/entities/block-title/ui"
import { ButtonLink } from "@/shared/ui/button-link"

export function AudioTitle(){
    return(
        <BlockTitle header='GAMING AUDIO' text='EXPLORE RAZER HEADSETS, WIRELESS HEADPHONES, EARPHONES FOR GAMING & BROADCASTING RAZER SPEAKERS'>
            <ButtonLink element='/store/audio' color='white'>SEE ALL</ButtonLink>
        </BlockTitle>
    )
}