"use client"

import { FormEventHandler, useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import Modal from "./Modal"
import { v4 as uuidv4 } from 'uuid'
import { addTodo } from "@/api"
import { addLocalTodo } from "../utils/localApi"
import { useRouter } from 'next/navigation'

const AddTask = () => {
  const router = useRouter()
  const [newTaskValue, setNewTaskValue] = useState('')
  const [modalOpen, setModalOpen] = useState(false)

  const handleSubmitNewTodo = async () => {
    // e.preventDefault()
    const newTodo =  {
      id: uuidv4(),
      text: newTaskValue
    }
    // await addTodo(newTodo)
    addLocalTodo(newTodo)
    // 关闭弹窗
    // 使用 dialog 标签可用:window.modal_add_task.closeModal()
    setNewTaskValue("")
    setModalOpen(false)
    // router.refresh()
    // todo 需要改进, 体验不佳
    window.location.reload()
  }

  return (
    <div>
      <button className="btn btn-primary w-full" onClick={() => setModalOpen(true)}>
        添加 TODO
        <AiOutlinePlus className="ml-1" size={18} />
      </button>

      <Modal title="添加新 todo" modalOpen={modalOpen} setModalOpen={setModalOpen}>
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
      </Modal>
    </div>
  )
}

export default AddTask
