import React, { useState } from 'react';

import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import { searchMovies } from "../../../../api/movie";

const Search = () => {
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
                onSearch={handleSearch}
            />
        </>
    )
};

export default Search;