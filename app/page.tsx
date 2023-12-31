"use client"

import { getAllTodos } from "@/api"
import AddTask from "./components/AddTask"
import TodoList from "./components/TodoList"
import { ITask } from "@/types/tasks"
import { useEffect, useState } from "react"
import { getLocalTodos } from "./utils/localApi"
import { useRouter } from "next/navigation"
import { TasksProvider, useTasksDispatch } from "./store/TasksContext"
export default function Home() {

  return (
    <TasksProvider>
      <main className="max-w-4xl mx-auto p-4">
        <div className="text-center my-5 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Next.js Todo List App</h1>
        </div>
        <AddTask />
        <TodoList />
      </main>
    </TasksProvider>
  )
}
