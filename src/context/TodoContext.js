import { createContext, useReducer } from "react";
import TodoReducer from "./TodoReducer";
const TodoContext=createContext()

export const TodoProvider=({children})=>{

  // const initialState={
  //    todos : [],
  //    todo : newTodo(text)
  // }

  // const newTodo=(text)=>{
  //   return {
  //     id : Date.now(),
  //     desc : text,
  //     completed:false
  //   }
  // }
  const [state,dispatch]=useReducer(TodoReducer,[])

  return <TodoContext.Provider value={{todos : state , dispatch}}>
      {children}
  </TodoContext.Provider>
}

export default TodoContext