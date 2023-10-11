import React, { useContext } from "react";
import { UserContext } from "./userContext";

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext)

    return (
        <>
            <h1>LOGIN</h1>
            <hr />

            <button
                className="btn btn-outline-primary"
                onClick={ () => setUser({
                    id: 1,
                    name: 'Matias',
                }) }
            >
                LOGIN
            </button>
        </>
    )
}