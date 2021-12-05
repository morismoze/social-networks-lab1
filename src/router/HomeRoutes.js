import React, { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";

import Home from "../pages/HomePage/Home";
import MovieDetails from "../pages/MovieDetails";
import { setActiveTab } from "../store/shared/navigation/Navigation.slice";
import { HEADER_NAV_ITEMS } from "../constants/header";

const HomeRoutes = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActiveTab(HEADER_NAV_ITEMS[0].id));
    }, []);

    return (
        <Routes>
            <Route path='' element={<Home/>} />
            <Route path=':id/details' element={<MovieDetails/>} />
        </Routes>
    );
};

export default HomeRoutes;