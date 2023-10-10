import React from "react";
import './ToDoApp.css'

export const ToDoListItem = ({toDo, index, handleDelete, handleToggle}) => {
    return (
        <>
            <li
                key={ toDo.id }
                className="list-group"
            >
                <div
                    className="item"
                >
                    <p
                        className={`${ toDo.done && 'complete' }`}
                        onClick={ () => handleToggle( toDo.id ) }
                    >
                        { index + 1 }. { toDo.item }
                    </p>
                    <button
                        className="btn btn-danger"
                        onClick={ () => handleDelete( toDo.id ) }
                    >
                        Borrar
                    </button>
                </div>
            </li>
        </>
    )
}