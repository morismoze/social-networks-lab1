import React, { useState } from 'react';

import { Grow } from "@mui/material";
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

import SearchResult from "../SearchResult";
import styles from './SearchBar.module.scss';

const SearchBar = ({
    isToggled,
    toggleSearch,
    handleSearch
}) => {
    const [ entry, setEntry ] = useState('');

    const [ results, setResults ] = useState([]);

    const [ isLoading, setIsLoading ] = useState(false);

    const handleSearchh = async (entry) => {
        setIsLoading(true);
        const movies = await handleSearch(entry);console.log(movies)
        setIsLoading(false);
        setResults(movies);
    };

    const handleOnResultClick = () => {
        toggleSearch();
    };

    return (
        <Grow
            in={isToggled}
            timeout={300}
            unmountOnExit
        >
            <div className={styles.container}>
                <AsyncTypeahead
                    query={entry}
                    labelKey={(option) => option.title}
                    isLoading={isLoading}
                    options={results}
                    id='search-bar'
                    minLength={3}
                    onSearch={handleSearchh}
                    placeholder='e.g. Titanic'
                    searchText='Searching...'
                    renderMenuItemChildren={(option) => (
                        <SearchResult
                            id={option.id}
                            title={option.title}
                            posterSrc={`https://image.tmdb.org/t/p/w92${option.poster_path}`}
                            onClick={handleOnResultClick}
                            key={option.id}
                        />
                    )}
                    useCache={false}
                />
            </div>
        </Grow>
    )
};

export default SearchBar;