import React, { useState } from 'react';

import { Grow } from "@mui/material";
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

import SearchResult from "../SearchResult";
import Fallback from '../../../../../assets/images/search-result-fallback.png';
import styles from './SearchBar.module.scss';

const SearchBar = ({
    isToggled,
    toggleSearch,
    onSearch
}) => {
    const [ entry, setEntry ] = useState('');

    const [ results, setResults ] = useState([]);

    const [ isLoading, setIsLoading ] = useState(false);

    const handleSearch = async (entry) => {
        setIsLoading(true);
        const movies = await onSearch(entry);
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
                    onSearch={handleSearch}
                    placeholder='e.g. Titanic'
                    searchText='Searching...'
                    renderMenuItemChildren={(option) => {
                        const posterSrc = option.poster_path ?
                            `https://image.tmdb.org/t/p/w92${option.poster_path}`
                            :
                            Fallback;

                        return <SearchResult
                            id={option.id}
                            title={option.title}
                            posterSrc={posterSrc}
                            onClick={handleOnResultClick}
                            key={option.id}
                        />
                    }}
                    useCache={false}
                />
            </div>
        </Grow>
    )
};

export default SearchBar;