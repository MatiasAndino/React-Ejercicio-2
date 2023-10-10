import React from "react";
import { ToDoListItem } from "./ToDoListItem";

export const ToDoList = ({ toDoList, handleDelete, handleToggle }) => {
    return (
        <ul
            className="list-group list-group-flush"
        >
            {
                toDoList.map( (toDo, i) => (
                    <ToDoListItem 
                        key={ toDo.id }
                        toDo={ toDo } 
                        index={ i }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                    />
                ))
            }
        </ul>
    )
}