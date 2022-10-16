import React from 'react'
import { useContext } from "react";
import TodoContext from "../../context/TodoContext";
import TodoItem from '../shared/TodoItem/TodoItem';
import {Collapse} from '@mui/material'
import { TransitionGroup } from "react-transition-group";
export default function ActiveTodos() {
  const {todos,dispatch}=useContext(TodoContext)

  return (
    <div>
      <TransitionGroup>
        {todos &&
          todos
            .filter((item) => item.completed === false)
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
                />
              </Collapse>
            ))}
      </TransitionGroup>
    </div>
  );
}


