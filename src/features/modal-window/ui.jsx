'use client'
import styles from './styles.module.scss'
import { useEffect } from 'react'
import ReactPortal from "./reactPortal";

export function ModalWindow({children, isOpen, handleClose}){

        useEffect(() => {
            function closeOnEscapeKey(e){
                if(e.key === "Escape"){
                    document.querySelector('body').style = 'overflow-y: scroll';
                    handleClose();
                }
            } 
            document.body.addEventListener("keydown", closeOnEscapeKey);
            return () => {
              document.body.removeEventListener("keydown", closeOnEscapeKey);
            };
          }, [handleClose]);
    
        if (!isOpen) return null;
    
        return (
            <ReactPortal wrappedIn='countrySelect'>
                <div className={styles.modal}>
                    <button onClick={() => {
                        document.querySelector('body').style = 'overflow-y: scroll';
                        handleClose()
                    }} className={styles.closeBtn}>
                    &#10006;
                    </button>
                    <div className={styles.modalContent}>{children}</div>
                </div>
            </ReactPortal>
        );
}