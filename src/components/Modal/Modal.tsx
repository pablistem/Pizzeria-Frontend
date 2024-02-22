import { ReactPortal } from "react";
import { createPortal } from "react-dom";

const Modal = ({ open, children }): ReactPortal | null  => {
  if (!open) return null
  return createPortal(
    <div 
      id="modal"
      className="flex fixed justify-center items-center inset-0 z-10 transition duration-300 ease-out bg-opacity-90" style={{ 
      backgroundColor: 'rgba(120, 120, 120, 0.7)',
      }}>
       <div>{children}</div>
    </div>,
    document.getElementById('portal')!
  )
}

export default Modal;