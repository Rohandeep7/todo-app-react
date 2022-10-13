import React from 'react'
import { useContext } from "react";
import TodoContext from "../context/TodoContext";
export default function ActiveTodos() {
  const {todos,dispatch}=useContext(TodoContext)

  return (
    <div>
      {todos && todos.filter(item=>item.completed===false).map(todo=>
        <div key={todo.id}>
        <div>
      <label style={{textDecoration : todo.completed && 'line-through'}} htmlFor="subscribe">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={()=>dispatch({ type: "TOGGLE_TODO", payload: {id : todo.id , checked : todo.completed} })}
          id={todo.id}
        />
        {todo.desc}
      </label>
    </div>
        {/* <button onClick={() => handleToggle(todo.id)}>Toggle</button>
        <button onClick={() => handleDelete(todo.id)}>Delete</button> */}
      </div>
      )}
    </div>
  )
}


