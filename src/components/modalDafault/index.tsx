import React from 'react'
import { StyledModal } from './styled'
import { MdClose } from 'react-icons/md'
import { useOutClick } from '../../hooks/useOutClick'

interface iModalProps {
   children: React.ReactNode
   callback: () => void
}

export const DefaultModal = ({ children, callback }: iModalProps) => {
    const ref = useOutClick<HTMLDivElement>(() => callback())
   return (
      <StyledModal>
         <div role='dialog' className='modal-box' ref={ref}>
            <button className='modal-close' onClick={callback}>
               <MdClose size={21} />
            </button>
            {children}
         </div>
      </StyledModal>
   )
}