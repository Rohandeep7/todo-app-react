import React from "react";
import { useState } from "react";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";
function AllTodos() {
  const [input, setInput] = useState("");
  const { todos, dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };

  const handleChange = (id,checked) => {
    // console.log(e.target.checked);
    dispatch({ type: "TOGGLE_TODO", payload: { id , checked} });
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TODO", payload: { id } });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="enter todo"
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {todos &&
          todos.map((todo) => {
            return (
              <div key={todo.id}>
                <div>
      <label style={{textDecoration : todo.completed && 'line-through'}} htmlFor="subscribe">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={()=>handleChange(todo.id,todo.completed)}
          id={todo.id}
        />
        {todo.desc}
      </label>
    </div>
                {/* <h1
                  style={{ textDecoration: todo.completed && "line-through" }}
                >
                  {todo.desc}
                </h1>
                <button onClick={() => handleToggle(todo.id)}>Toggle</button>
                <button onClick={() => handleDelete(todo.id)}>Delete</button> */}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default AllTodos;
