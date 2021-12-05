import React from 'react';

import { Routes, Route } from 'react-router-dom';

import UserData from "../pages/Profile/UserData";
import LikedList from "../pages/Profile/LikedList";
import WatchList from "../pages/Profile/WatchList";

const ProfileRoutes = () => {
    return (
        <Routes>
            <Route path='personal-information' element={<UserData/>} />
            <Route path='liked' element={<LikedList/>} />
            <Route path='watchlist' element={<WatchList/>} />
        </Routes>
    );
};

export default ProfileRoutes;