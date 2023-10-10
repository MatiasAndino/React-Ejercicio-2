import React from "react";
import { useForm } from "../../hooks/useForm";


export const ToDoAdd = ({ handleAddToDo }) => {

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

        handleAddToDo( newToDoItem );
        
        reset();
    }

    return (
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
    )
}