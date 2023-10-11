import React, { useContext } from "react";
import { UserContext } from "./userContext";

export const AboutScreen = () => {

    const { user, setUser } = useContext( UserContext );

    function handleClick() {
        setUser({});
    }

    return (
        <>
            <h1>ABOUT</h1>
            <hr />
            <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre>
            <button
                className="btn btn-warning"
                onClick={ handleClick }
            >
                LOGOUT
            </button>
        </>
    )
}