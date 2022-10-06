import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import Feed from '../Feed/Feed'
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import ProfilePage from '../Profile/Profile';
import Show from '../Show/Show'
import userService from "../../utils/userService";



function App() {
    const [user, setUser] = useState(userService.getUser()); // getUser decodes our JWT token, into a javascript object
    // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like
    // this  const token = createJWT(user); // where user was the document we created from mongo
    // console.log(user)
    function handleSignUpOrLogin() {
        setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
    }

    function handleLogout() {
        userService.logout();
        setUser(null);
    }


    if (user) {
        // if the user is logged in
        return (
            <Routes>
                <Route path="/" element={<Feed loggedUser={user} handleLogout={handleLogout} />} />
                <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
                <Route path="/signup" element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
                <Route path='/:username' element={<ProfilePage  loggedUser={user} handleLogout={handleLogout} />} />
                <Route path='/post/:id' element={<Show loggedUser={user} handleLogout={handleLogout} />} />
            </Routes>
        );
    }

    return (
        // if the user is not logged in
        <Routes>
            <Route
                path="/login"
                element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
            />
            <Route
                path="/signup"
                element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
            />
            <Route path="/*" element={<Navigate to="/signup" />} />
        </Routes>
    );
}

export default App;
