import { Checkbox, Label, ItemCont, DeleteIcon } from "./TodoItem.styles";
import TodoContext from "../../../context/TodoContext";
import { Zoom} from "@mui/material";
import { useContext } from "react";
function TodoItem({ todo , handleChange, activity}) {
  const {dispatch}=useContext(TodoContext)

  return (
    <Zoom in={true}>
      <ItemCont>
        <Label>
          <Checkbox
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleChange(todo.id, todo.completed)}
            id={todo.id}
          />
          <span />
          <p>{todo.desc}</p>
        </Label>
        {activity && (
          <DeleteIcon
            key={todo.id}
            onClick={() =>
              dispatch({ type: "DELETE_TODO", payload: { id: todo.id } })
            }
          />
        )}
      </ItemCont>
    </Zoom>
  );
}
export default TodoItem;
