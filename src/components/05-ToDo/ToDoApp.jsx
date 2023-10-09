import React, { useEffect, useReducer } from "react";
import { toDoListReducer } from "./toDoListReducer";
import { useForm } from "../../hooks/useForm";


import './ToDoApp.css';

const init = () => {

    return JSON.parse(localStorage.getItem('ToDoList')) || [];
    
};

export const ToDoApp = () => {

    const [ toDoList, dispatch ] = useReducer(toDoListReducer, [], init);

    const [ { description }, handleInputChange, reset ] = useForm({
        description:''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) return;

        const newToDoItem = {
            id: new Date().getTime(),
            item: description,
            done: false,
        };

        const action = {
            type: 'add',
            payload: newToDoItem,
        };

        dispatch( action );
        
        reset();
    }
    
    const handleDelete = ( toDoId ) => {
    
        const action = {
            type: 'delete',
            payload: toDoId,
        };
    
        dispatch( action );

    }

    const handleToggle = (toDoId) => {
        const action = {
            type: 'toggle',
            payload: toDoId,
        }

        dispatch( action);
    }

    useEffect(() => {
        localStorage.setItem('ToDoList', JSON.stringify( toDoList ));
    }, [toDoList]);

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
                            className="list-group"
                        >
                            <div
                                className="item"
                            >
                                <p
                                    className={`${ toDo.done && 'complete' }`}
                                    onClick={ () => handleToggle( toDo.id ) }
                                >
                                    { i + 1 }. { toDo.item }
                                </p>
                                <button
                                    className="btn btn-danger"
                                    onClick={ () => handleDelete( toDo.id ) }
                                >
                                    Borrar
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <div>
                <form 
                    onSubmit={handleSubmit}
                >
                    <input 
                        type="text" 
                        name="description" 
                        className="form-control mt-5"
                        placeholder="Agrega una nueva tarea"
                        autoComplete="off"
                        onChange={ handleInputChange }
                        value={ description }
                    />
                    <button 
                        type="submit"
                        className="btn btn-outline-primary mt-3"
                    >
                        Agregar
                    </button>
                </form>
            </div>
        </>
    )
}