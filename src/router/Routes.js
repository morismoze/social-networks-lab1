import React from 'react';

import { Routes, Route, useNavigate } from 'react-router-dom';

import LoginPage from "../pages/Login";
import HomePage from "../pages/Home";
import MoviesPage from "../pages/Movies";
import { setResponsesInterceptor } from "../api/network";

const MainRoutes = () => {
    const navigate = useNavigate();

    setResponsesInterceptor(navigate);

    return (
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/movies/*' element={<MoviesPage/>} />
            <Route path='/auth' element={<LoginPage/>} />
        </Routes>
    );
};

export default MainRoutes;