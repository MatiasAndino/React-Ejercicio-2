import React, { useEffect, useReducer } from "react";
import { toDoListReducer } from "./toDoListReducer";
import { ToDoList } from "./ToDoList";
import { ToDoAdd } from "./ToDoAdd";

import './ToDoApp.css';

const init = () => {

    return JSON.parse(localStorage.getItem('ToDoList')) || [];
    
};

export const ToDoApp = () => {

    const [ toDoList, dispatch ] = useReducer(toDoListReducer, [], init);

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

    const handleAddToDo = (newToDoItem) => {
        dispatch( {
            type: 'add',
            payload: newToDoItem,
        } );
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

            <ToDoList 
                toDoList={ toDoList }
                handleDelete={ handleDelete }
                handleToggle={ handleToggle }
            />

            {/* <div> */}
                <ToDoAdd 
                    handleAddToDo={ handleAddToDo }
                />
            {/* </div> */}
        </>
    )
}