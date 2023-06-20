"use client"

import { FormEventHandler, useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import Modal from "./Modal"
import { useRouter } from "next/navigation"
import { v4 as uuidv4 } from 'uuid'
import { addTodo } from "@/api"

const AddTask = () => {
  const router = useRouter()
  const [newTaskValue, setNewTaskValue] = useState('')
  const handleAdd = () => {
    // setModalOpen(true)
    window.modal_add_task.showModal()
  }

  const handleSubmitNewTodo = async () => {
    // e.preventDefault()
    console.log(newTaskValue)
    await addTodo({
      id: uuidv4(),
      text: newTaskValue
    })
    // 关闭弹窗
    // window.modal_add_task.closeModal()
    setNewTaskValue("")
    router.refresh()
  }

  return (
    <div>
      <button className="btn btn-primary w-full" onClick={handleAdd}>
        Add new task
        <AiOutlinePlus className="ml-1" size={18} />
      </button>

      {/* <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        modal for add todo
      </Modal> */}
      <Modal>
        {/* <form onSubmit={handleSubmitNewTodo}> */}
          <h3 className="font-bold text-lg">添加新 todo</h3>
          <div className="modal-action">
            <input
            value={newTaskValue}
            onChange={e => setNewTaskValue(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <button type="submit" className="btn" onClick={handleSubmitNewTodo}>
              确定
            </button>
          </div>
        {/* </form> */}
      </Modal>
    </div>
  )
}

export default AddTask
