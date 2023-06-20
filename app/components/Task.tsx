import { ITask } from "@/types/tasks"
import React from "react"
interface TaskProps {
  task: ITask
}
const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <tr key={task.id}>
      <th>{task.id}</th>
      <td>{task.text}</td>
      <td>doing</td>
    </tr>
  )
}

export default Task
