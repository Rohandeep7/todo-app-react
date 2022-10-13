const TodoReducer=(state,action)=>{
  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state, { id : Date.now() , desc : action.payload , completed:false}
      ]
    case 'TOGGLE_TODO':
      console.log(action.payload)
      return state.map((todo)=>todo.id===action.payload.id ?
      {...todo,completed:!todo.completed} : todo)
    case 'DELETE_TODO':
      return state.filter(todo=>todo.id!==action.payload.id)
    case 'DELETE_ALL_TODOS':
      return state.filter(todo=>todo.completed!==true)
    default:
      return state
  }
}

export default TodoReducer