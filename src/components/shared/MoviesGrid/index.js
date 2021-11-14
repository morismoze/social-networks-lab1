import React, { useEffect, useState } from 'react';

import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string';

import WithLayoutWrapper from "../../../components/shared/withLayoutWrapper";
import MovieCard from "../../../components/shared/MovieCard";
import CustomPagination from "../../../components/shared/CustomPagination";
import styles from './MoviesGrid.module.scss';
import Footer from "../Footer";
import MoviesNavigation from "../MoviesNavigation";

const MoviesGrid = ({
    status,
    movies,
    getMovies
}) => {
    const navigate = useNavigate();

    const location = useLocation();

    const [ page, setPage ] = useState(null);

    const handleOnPageChange = (event, value) => {
        setPage(value);
        navigate({
            pathname: `${location.pathname}`,
            search: `?page=${value}`
        });
    };

    useEffect(() => {
        if (location && location.search) {
            const page = queryString.parse(location.search).page;
            setPage(page);
            getMovies(page)
        } else if (!location.search) {
            setPage(1);
            getMovies(1)
        }
    }, [location]);

    return (
        <WithLayoutWrapper className={styles.moviesContainer}>
            {status === 'success' &&
                <MoviesNavigation/>
            }
            <div className={styles.moviesContainer__wrapper}>
                {status === 'success' &&
                    movies.map((movie, index) => (
                        <MovieCard
                            movie={movie}
                            width={789}
                            height={439}
                            index={index + 1}
                            key={movie.id}
                        />
                    ))
                }
            </div>
            {status === 'success' && page &&
                <CustomPagination
                    count={10}
                    page={Number(page)}
                    onChange={handleOnPageChange}
                />
            }
            {status === 'success' &&
                <Footer/>
            }
        </WithLayoutWrapper>
    );
};

export default MoviesGrid;