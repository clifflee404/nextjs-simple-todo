"use client"

import { ITask } from "@/types/tasks"
import React, { useState } from "react"
import { FiEdit, FiTrash2 } from "react-icons/fi"
import Modal from "./Modal"
import { useRouter } from "next/navigation"
import { editTodo } from "@/api"
interface TaskProps {
  task: ITask
}
const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter()
  const [openModalEdit, setOpenModalEdit] = useState(false)
  const [openModalDelete, setOpenModalDelete] = useState(false)
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text)

  const handleSubmitEditTask = async () => {
    await editTodo({
      id: task.id,
      text: taskToEdit
    })
    // 关闭弹窗
    // window.modal_add_task.closeModal()
    // setTaskToEdit("")
    setOpenModalEdit(false)
    router.refresh()
  }

  return (
    <tr key={task.id}>
      {/* <th>{task.id}</th> */}
      <td className="w-full">{task.text}</td>
      <td className="flex gap-5">
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          cursor="pointer"
          className="text-blue-500"
          size={25}
        />
        <FiTrash2 cursor="pointer" className="text-red-500" size={25} />

        {/* 编辑任务弹窗 */}
        <Modal
          title="添加新 todo"
          modalOpen={openModalEdit}
          setModalOpen={setOpenModalEdit}
        >
          <div className="modal-action">
            <input
              value={taskToEdit}
              onChange={(e) => setTaskToEdit(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <button
              type="submit"
              className="btn"
              onClick={handleSubmitEditTask}
            >
              确定
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  )
}

export default Task
