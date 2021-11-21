import React from 'react';

import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import LoginPage from "../pages/Login";
import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import ProfilePage from "../pages/Profile";
import PeoplePage from "../pages/People";
import { setResponsesInterceptor } from "../api/network";

const MainRoutes = () => {
    const navigate = useNavigate();

    const location = useLocation();

    setResponsesInterceptor(navigate, location);

    return (
        <Routes>
            <Route path='/*' element={<HomePage/>} />
            <Route path='/movies/*' element={<MoviesPage/>} />
            <Route path='/profile/*' element={<ProfilePage/>} />
            <Route path='/people/*' element={<PeoplePage/>} />
            <Route path='/auth' element={<LoginPage/>} />
        </Routes>
    );
};

export default MainRoutes;