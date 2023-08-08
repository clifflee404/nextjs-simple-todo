import { ITask } from "@/types/tasks"

const STORAGE_KEY = 'todos'

export const getLocalTodos = async ():Promise<ITask[]> => {
  return new Promise((resolve, reject) => {
    try {
      const cacheTodos = localStorage.getItem(STORAGE_KEY)
      if (cacheTodos) {
        const todos: ITask[] = JSON.parse(cacheTodos)
        resolve(todos)
      }
    } catch (error) {
      reject(error)
    }
  })

}

export const addLocalTodo = (newTodo: ITask) => {
  const cacheTodos = localStorage.getItem(STORAGE_KEY)
  if (cacheTodos) {
    const todos: ITask[] = JSON.parse(cacheTodos)
    todos.push(newTodo)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  } else {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([newTodo]))
  }
}

export const editLocalTodo = async (updateTodo: ITask) => {
  const cacheTodos = localStorage.getItem(STORAGE_KEY)
  if (cacheTodos) {
    const todos: ITask[] = JSON.parse(cacheTodos)
    const newTodos = todos.map(item => {
      if (item.id === updateTodo.id) {
        return updateTodo
      } else {
        return item
      }
    })
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newTodos))
  }
}

export const deleteLocalTodo = async (deleteId: string) => {
  const cacheTodos = localStorage.getItem(STORAGE_KEY)
  if (cacheTodos) {
    const todos: ITask[] = JSON.parse(cacheTodos)
    const newTodos = todos.filter(item => item.id !== deleteId)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newTodos))
  }
}