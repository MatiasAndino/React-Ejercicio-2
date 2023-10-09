import React, {useRef} from "react";
import '../../index.css'

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        // document.querySelector('input').select(); // OPCION, SIN USEREF
        inputRef.current.select();
    }

    return (
        <>
            <h1>FOCUS SCREEN</h1>
            <hr />

            <input
                ref={ inputRef }
                className="form-control"
                placeholder="Su nombre"
            />

            <button
                className="btn btn-outline-primary mt-3"
                onClick={ handleClick }
            >
                FOCUS
            </button>
        </>
    )
}