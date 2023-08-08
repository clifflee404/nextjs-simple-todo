// @ts-nocheck
import { ITask } from "@/types/tasks"
import { createContext, useContext, useReducer } from "react"

// const initialTasks = [
//   { id: '0', text: 'Philosopher’s Path' },
//   { id: '1', text: 'Visit the temple' },
//   { id: '2', text: 'Drink matcha' }
// ];
const initialTasks = []

const TasksContext = createContext(initialTasks)

const TasksDispatchContext = createContext(null)

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext)
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext)
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "list": {
      console.log('---action list', );
      return [...action.list]
    }
    case "add": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
        },
      ]
    }
    case "edit": {
      return tasks.map((item) => {
        return item.id === action.task.id ? action.task : item
      })
    }

    case "delete": {
      return tasks.filter((item) => item.id !== action.id)
    }

    default: {
      throw Error("Unknown action: " + action.type)
    }
  }
}
