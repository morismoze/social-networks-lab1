import React, { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { setActiveTab } from "../store/shared/navigation/Navigation.slice";

const HomeRoutes = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActiveTab('home'));
    }, []);

    return (
        <Routes>
            <Route exact path='/' />
        </Routes>
    );
};

export default HomeRoutes;