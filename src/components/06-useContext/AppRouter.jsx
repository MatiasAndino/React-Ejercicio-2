import React from "react";
import {
    // createBrowserRouter,
    // RouterProvider,
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import { AboutScreen } from "./AboutScreen";
import { LoginScreen } from "./LoginScreen";
import { HomeScreen } from "./HomeScreen";
import { NavBar } from "./NavBar";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    {/* <Route path="/" Component={ HomeScreen } />
                    <Route path="/about" Component={ AboutScreen } />
                    <Route path="/login" Component={ LoginScreen } /> */}
                    <Route path="/" element={ <HomeScreen />} />
                    <Route path="/about" element={ <AboutScreen />} />
                    <Route path="/login" element={ <LoginScreen />} />
                </Routes>
            </div>
        </Router>
    )
}