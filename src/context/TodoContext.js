import { createContext, useEffect, useReducer } from "react";
import TodoReducer from "./TodoReducer";
const TodoContext=createContext()

export const TodoProvider=({children})=>{

  const initialState=localStorage.getItem('tasks') ? localStorage.getItem('tasks') : []
  console.log(initialState)
  const [state,dispatch]=useReducer(TodoReducer,[])

  useEffect(()=>{
    localStorage.setItem('tasks',state)
  },[state])

  return <TodoContext.Provider value={{todos : state , dispatch}}>
      {children}
  </TodoContext.Provider>
}

export default TodoContext