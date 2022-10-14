import React from "react";
import { useState } from "react";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import TodoItem from "./shared/TodoItem";
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
      <form className='container' action="" onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="add details"
        />
        <button type="submit" className='btn'>Add</button>
      </form>
      <div>
        {todos &&
          todos.map((todo) => {
            return (
              <TodoItem handleChange={handleChange} key={todo.id} todo={todo}/>
            );
          })}
      </div>
    </div>
  );
}

export default AllTodos;
