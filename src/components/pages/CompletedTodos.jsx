import React from 'react'
import { useContext } from "react";
import Collapse from "@mui/material/Collapse";
import { TransitionGroup } from "react-transition-group";
import TodoContext from "../../context/TodoContext";
import TodoItem from '../shared/TodoItem/TodoItem';
import { MdDeleteOutline } from 'react-icons/md';
import { useParams } from 'react-router-dom';
function CompletedTodos() {
  const {todos,dispatch}=useContext(TodoContext)
  const params=useParams()
  return (
    <div>
      <div>
        <TransitionGroup>
          {todos &&
            todos
              .filter((item) => item.completed === true)
              .map((todo) => (
                <Collapse key={todo.id}>
                  <TodoItem
                    handleChange={() =>
                      dispatch({
                        type: "TOGGLE_TODO",
                        payload: { id: todo.id, completed: todo.completed },
                      })
                    }
                    key={todo.id}
                    todo={todo}
                    activity={params.activity}
                  />
                </Collapse>
              ))}
        </TransitionGroup>
      </div>
      <button
        className="delete-all-btn"
        onClick={() => dispatch({ type: "DELETE_ALL_TODOS" })}
      >
        <MdDeleteOutline /> delete all
      </button>
    </div>
  );
}

export default CompletedTodos