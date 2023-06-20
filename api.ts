import { ITask } from "./types/tasks"

const baseUrl = "http://localhost:3001"

export const getAllTodos = async(): Promise<ITask[]> => {
  const res = await fetch(`${baseUrl}/tasks`, {
    cache: 'no-store'
  })
  const todos = await res.json()
  return todos
}

export const addTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
  const newTodo = await res.json()
  return newTodo
}


export const editTodo = async (todo: ITask): Promise<ITask> => {
  // url 后面跟id json-server可自动对应到要修改的内容
  const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
    // 使用 put 
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
  const updatedTodo = await res.json()
  return updatedTodo
}

export const deleteTodo =async (id:string): Promise<void> => {
    const res = await fetch(`${baseUrl}/tasks/${id}`, {
      method:  'DELETE'
    })

    console.log('--delete ok:', res)
}