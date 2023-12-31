"use client"
import { ITask } from "@/types/tasks"
import React, { useEffect, useState } from "react"
import Task from "./Task"
import { getLocalTodos } from "../utils/localApi"
import { useTasks, useTasksDispatch } from "../store/TasksContext"
import Loading from "./Loading"

const TodoList = () => {
  const [loading, setLoading] = useState(true)
  const tasks = useTasks()
  const dispatch: any = useTasksDispatch()

  console.log("---todo list:", tasks)

  const getData = async () => {
    setLoading(true)
    const tasks: ITask[] = await getLocalTodos()
    console.log("page tasks:", tasks)
    dispatch({
      type: "list",
      list: tasks,
    })
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])


  if(loading){
    return <Loading/>
  }

  if (!tasks || (tasks && tasks.length === 0)) {
    return (
      <div className="flex items-center justify-center py-4 w-full">
        暂无数据
      </div>
    )
  }
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            {/* <th>Index</th> */}
            <th>任务</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TodoList
