import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Person from "../pages/People/Person";

const PeopleRoutes = () => {
    return (
        <Routes>
            <Route path=':id' element={<Person/>} />
        </Routes>
    );
};

export default PeopleRoutes;