import React from "react"

interface ModalProps {
  // modalOpen?: boolean
  // setModalOpen?: (open: boolean) => boolean | void
  children?: React.ReactNode
}
const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <dialog id="modal_add_task" className="modal">
      <form method="dialog" className="modal-box">
      {/* <div className="modal-box"> */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        {children}
      {/* </div> */}
      </form>
    </dialog>
  )
}

export default Modal
