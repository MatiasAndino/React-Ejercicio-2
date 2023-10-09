import React, { useReducer } from "react";
import { toDoListReducer } from "./toDoListReducer";


import './ToDoApp.css';

const initialState = [
    {
        id: new Date().getDate(),
        item: 'Dale perro',
        done: false,
    }
];

export const ToDoApp = () => {

    const [ toDoList ] = useReducer(toDoListReducer, initialState);


    return (
        <>
            <h1 
                className="text-center"
            >
                To Do List ( {toDoList.length} )
            </h1>
            <hr />

            <ul
                className="list-group list-group-flush"
            >
                {
                    toDoList.map( (toDo, i) => (
                        <li
                            key={ toDo.id }
                            className="list-group-item"
                        >
                            <div
                                className="item"
                            >
                                <p>
                                    { i + 1 }. { toDo.item }
                                </p>
                                <button
                                    className="btn btn-danger"
                                >
                                    Borrar
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}