import { createContext, useEffect, useReducer } from "react";
import useLocalStorage from "../components/custom-hooks/useLocalStorage";
import TodoReducer from "./TodoReducer";
const TodoContext=createContext()

export const TodoProvider=({children})=>{
  const [tasks,setTasks]=useLocalStorage('tasks',[])
  const [state,dispatch]=useReducer(TodoReducer,tasks)

  useEffect(()=>{
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setTasks(state)
  },[state])

  return <TodoContext.Provider value={{todos : state , dispatch}}>
      {children}
  </TodoContext.Provider>
}

export default TodoContext