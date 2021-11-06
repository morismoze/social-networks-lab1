import React from 'react';

import { Routes, Route } from 'react-router-dom';

import LoginPage from "../pages/Login";
import HomePage from "../pages/Home";
import MoviesPage from "../pages/Movies";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/movies/*' element={<MoviesPage/>} />
            <Route path='auth' element={<LoginPage/>} />
        </Routes>
    );
};

export default MainRoutes;