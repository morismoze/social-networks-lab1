import React from 'react';

import { Routes, Route } from 'react-router-dom';

import PersonDetails from "../pages/People/PersonDetails";

const PeopleRoutes = () => {
    return (
        <Routes>
            <Route path=':id' element={<PersonDetails/>} />
        </Routes>
    );
};

export default PeopleRoutes;