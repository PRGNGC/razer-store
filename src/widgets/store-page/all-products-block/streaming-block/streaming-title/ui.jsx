import { BlockTitle } from "@/entities/block-title/ui"
import { ButtonLink } from "@/shared/ui/button-link"

export function StreamingTitle(){
    return(
        <BlockTitle header='STREAMING' text='CREATE WITHOUT LIMITS WITH OUR PROFESSIONAL WEBCAMS, MICROPHONES, AND MORE'>
            <ButtonLink element='/store/streaming' color='white'>SEE ALL</ButtonLink>
        </BlockTitle>
    )
}