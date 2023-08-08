"use client"

import { getAllTodos } from "@/api"
import AddTask from "./components/AddTask"
import TodoList from "./components/TodoList"
import { ITask } from "@/types/tasks"
import { useEffect, useState } from "react"
import { getLocalTodos } from "./utils/localApi"
import { useRouter } from "next/navigation"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  // const tasks = await getAllTodos()
  const [tasks, setTasks] = useState<ITask[]>([])

  const getData = async () => {
    setLoading(true)
    const tasks: ITask[] = await getLocalTodos()
    console.log("page tasks:", tasks)
    setTasks(tasks)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    console.log("---router")
  }, [router])

  return (
    <main className="max-w-4xl mx-auto p-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Next.js Todo List App</h1>
      </div>
      <AddTask />
      {loading ? (
        <div className="flex items-center justify-center py-4">
          <span className="loading loading-spinner loading-md"></span>
        </div>
      ) : (
        <TodoList tasks={tasks} />
      )}
    </main>
  )
}
