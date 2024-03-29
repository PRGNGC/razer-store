import { createPortal } from 'react-dom'

export default function ReactPortal({children, wrappedIn}){
    return(createPortal(children, document.querySelector(".countrySelect")));
}