import React from 'react'
import { StyledModal } from './styled'
import { MdClose } from 'react-icons/md'
import { useOutClick } from '../../hooks/useOutClick'

interface iModalProps {
   children: React.ReactNode
   callback: () => void
   maxWidth?: number
}

export const DefaultModal = ({ children, callback, maxWidth }: iModalProps) => {
    const ref = useOutClick<HTMLDivElement>(() => callback())
   return (
      <StyledModal maxWidth={maxWidth}>
         <div role='dialog' className='modal-box' ref={ref} >
            <button className='modal-close' onClick={callback}>
               <MdClose size={21} />
            </button>
            {children}
         </div>
      </StyledModal>
   )
}