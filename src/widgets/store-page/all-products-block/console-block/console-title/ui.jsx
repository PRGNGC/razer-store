import { BlockTitle } from "@/entities/block-title/ui"
import { ButtonLink } from "@/shared/ui/button-link"

export function ConsoleTitle(){
    return(
        <BlockTitle header='CONSOLE' text='GAMING AUDIO, CONTROLLERS, AND ACCESSORIES FOR XBOX AND PLAYSTATION'>
            <ButtonLink element='/store/console' color='white'>SEE ALL</ButtonLink>
        </BlockTitle>
    )
}