import { BlockTitle } from '@/entities/block-title'
import { ButtonLink } from '@/shared/ui/button-link'

export function CategoriesTitle(){
    return(
        <BlockTitle header='CHOOSE GREATEST GAMING GEAR' text='DISCOVER EXCLUSIVE GEAR AND SERVICES FOUND NOWHERE ELSE'>
            <ButtonLink element='' color='white'>SEE ALL</ButtonLink>
        </BlockTitle>
    )
}