import React from "react"

interface ModalProps {
  title: string
  modalOpen: boolean
  setModalOpen: (open: boolean) => boolean | void
  children: React.ReactNode
}
const Modal: React.FC<ModalProps> = ({title, modalOpen, setModalOpen, children }) => {
  return (
    // <dialog id="modal_add_task" className="modal">
    //   <form method="dialog" className="modal-box">
    //     <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    //     {children}
    //   </form>
    // </dialog>

    <div className={`modal ${modalOpen ? 'modal-open' : ''}`}>
      <div className="modal-box">
      <button onClick={() => setModalOpen(false)}  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        <h3 className="font-bold text-lg">{title}</h3>
        {/* <p className="py-4">This modal works with a hidden checkbox!</p> */}
        {children}
        {/* <div className="modal-action">
          <label htmlFor="my_modal_6" className="btn">Close!</label>
        </div> */}
      </div>
    </div>
  )
}

export default Modal
