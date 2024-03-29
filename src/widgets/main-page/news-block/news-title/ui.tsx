import { BlockTitle } from "@/entities/block-title/ui"
import { ButtonLink } from "@/shared/ui/button-link"

export function NewsTitle(){
    return(
        <BlockTitle header='RAZER`s News' text='There is no better place to buy the latest Razer gear than here at our official online store'>
            <ButtonLink element='' color='white'>SEE ALL</ButtonLink>
        </BlockTitle>
    )
}