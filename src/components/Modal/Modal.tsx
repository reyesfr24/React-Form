import { useRef, useState } from "react"
import { createPortal } from "react-dom"

interface Props {
  children: React.ReactNode
}

export const Modal = ({children}: Props) => {
  const modalRef = useRef<HTMLDivElement>(null) 
  const [ state, setState ] = useState(false)

  const closeModal = () => {setState(false)}

  const modalRoot = document.getElementById("modal")
  
  if(!state || !modalRoot) {
    return null;
  }

  return createPortal(
    <div className="overlay" onClick={closeModal}>
      <div className="modal" ref={modalRef}>
        <button className="close-button" onClick={closeModal}>Cerrar </button>
      </div>
    </div>, modalRoot
  )
}

