import React from "react";
import Todo from "./Todo";


const ToDoList = ({todos,markTodo,deleteTodo}) =>{
    const allTodos = todos.map((todo,index)=>{
        return(
            <Todo todo={todo} key={todo.id} index={index} markTodo={markTodo} deleteTodo={deleteTodo}/>
        )
    })

    return (
        <div className="container">
            <div className="row">
              {allTodos}
            </div>
        </div>
    )
}

export default ToDoList;