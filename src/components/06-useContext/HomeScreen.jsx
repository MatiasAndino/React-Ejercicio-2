import React, { useContext } from "react";
import { UserContext } from "./userContext";

export const HomeScreen = () => {

    const { user } = useContext(UserContext);

    return (
        <>
            <h1>HOME</h1>
            <hr />

            <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre>
        </>
    )
}