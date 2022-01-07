import React, { useState } from 'react';

import { useDispatch } from "react-redux";

import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import { searchMovies } from "../../../api/movie";

const Search = () => {
    const dispatch = useDispatch();

    const [ isToggled, setIsToggled ] = useState(false);

    const toggleSearch = () => {
        setIsToggled(!isToggled);
    };

    const handleSearch = async (entry) => {
        const movies = await searchMovies(entry);

        return movies;
    };

    return (
        <>
            <SearchButton
                isToggled={isToggled}
                toggleSearch={toggleSearch}
            />
            <SearchBar
                isToggled={isToggled}
                toggleSearch={toggleSearch}
                handleSearch={handleSearch}
            />
        </>
    )
};

export default Search;