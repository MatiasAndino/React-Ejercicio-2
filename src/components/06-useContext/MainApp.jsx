import React, { useState } from "react";
import { AppRouter } from "./AppRouter";
import { UserContext } from "./userContext";

export const MainApp = () => {

    const [ user, setUser ] = useState({})

    return (
        <UserContext.Provider value={{
            user,
            setUser,
        }}>
            <AppRouter />
        </UserContext.Provider>
    )
}