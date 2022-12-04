import React from "react";
import { useLocation } from "react-router-dom";

const User = () => {
    const {
        state: { email, password },
    } = useLocation();

    return (
        <div className="container">
            <h1>Hi there!</h1>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
        </div>
    );
};

export default User;
