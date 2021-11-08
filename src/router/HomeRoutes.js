import React, { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";

import Home from "../pages/HomePage/Home";
import { setActiveTab } from "../store/shared/navigation/Navigation.slice";

const HomeRoutes = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActiveTab('home'));
    }, []);

    return (
        <Routes>
            <Route exact path='' element={<Home/>}/>
        </Routes>
    );
};

export default HomeRoutes;