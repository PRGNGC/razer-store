import { BlockTitle } from "@/entities/block-title/ui"
import { ButtonLink } from "@/shared/ui/button-link"

export function ExcTitle(){
    return(
        <BlockTitle header='RAZER EXCLUSIVES' text='Explore unique products only available at our official online store'>
            <ButtonLink element="" color='white'>SEE ALL</ButtonLink>
        </BlockTitle>
    )
}