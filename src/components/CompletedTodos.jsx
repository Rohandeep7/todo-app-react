import React from 'react'
import { useContext } from "react";
import TodoContext from "../context/TodoContext";
function CompletedTodos() {
  const {todos,dispatch}=useContext(TodoContext)

  return (
    <div>
      <div>
      {todos && todos.filter(item=>item.completed===true).map(todo=>
        <div key={todo.id}>
        <h1
          style={{ textDecoration: todo.completed && "line-through" }}
        >
          {todo.desc}
        </h1>
        {/* <button onClick={() => handleToggle(todo.id)}>Toggle</button>
        <button onClick={() => handleDelete(todo.id)}>Delete</button> */}
      </div>
      )}
      </div>
      <button onClick={()=>dispatch({type:'DELETE_ALL_TODOS'})}>delete all</button>
    </div>
  )
}

export default CompletedTodos