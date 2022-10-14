import React from "react";

function TodoItem({ todo , handleChange}) {
  return (
    
      <div className="item-container">
        <label className="todo-desc"
          style={{ textDecoration: todo.completed && "line-through" }}
          htmlFor="todo"
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleChange(todo.id, todo.completed)}
            id={todo.id}
          />
          {/* <span>
          
          </span> */}
          <p>{todo.desc}</p>
        </label>
      </div>
      
    
  );
}

export default TodoItem;
