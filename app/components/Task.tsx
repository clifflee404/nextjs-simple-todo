"use client"

import { ITask } from "@/types/tasks"
import React, { useState } from "react"
import { FiEdit, FiTrash2 } from "react-icons/fi"
import Modal from "./Modal"
import { useRouter } from "next/navigation"
import { deleteTodo, editTodo } from "@/api"
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
      text: taskToEdit,
    })
    // 关闭弹窗
    // window.modal_add_task.closeModal()
    // setTaskToEdit("")
    setOpenModalEdit(false)
    router.refresh()
  }

  const handleDelete = async () => {
    await deleteTodo(task.id)
    setOpenModalDelete(false)
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
        <FiTrash2
          onClick={() => setOpenModalDelete(true)}
          cursor="pointer"
          className="text-red-500"
          size={25}
        />

        {/* 编辑任务弹窗 */}
        <Modal
          title="修改 todo"
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
        {/* 删除任务 */}
        <Modal
          title="删除 todo"
          modalOpen={openModalDelete}
          setModalOpen={setOpenModalDelete}
        >
          <h2 className="text-lg my-4">确定删除当前任务吗?</h2>
          <div className="modal-action">
            <button className="btn btn-outline btn-error" onClick={handleDelete}>
              确定删除
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  )
}

export default Task
