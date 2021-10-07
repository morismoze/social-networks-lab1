import React from 'react';

import { fbLogin, fbLogout } from "../../api/facebook";

const FBLoginButton = () => {
    return (
        <>
            <button onClick={() => fbLogin()}>
                Login
            </button>
            <button onClick={() => fbLogout()}>
                Logout
            </button>
        </>
    );
};

export default FBLoginButton;