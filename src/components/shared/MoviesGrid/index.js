import React, { useEffect, useState } from 'react';

import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import queryString from 'query-string';

import WithLayoutWrapper from "../../../components/shared/withLayoutWrapper";
import MovieCard from "../../../components/shared/MovieCard";
import CustomPagination from "../../../components/shared/CustomPagination";
import * as UserSelectors from '../../../store/shared/user/User.selectors';
import { actions as userActivityActions} from '../../../store/shared/userActivity/UserActivity.actions';
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

    const dispatch = useDispatch();

    const [ page, setPage ] = useState(null);

    const userId = useSelector(UserSelectors.id);

    const handleOnPageChange = (event, value) => {
        setPage(value);
        navigate({
            pathname: `${location.pathname}`,
            search: `?page=${value}`
        });
    };

    useEffect(() => {
        if (userId) {
            dispatch(userActivityActions.getLikedMovies(userId));
        }
    }, [userId]);

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
                            name={movie.title}
                            rating={movie.vote_average}
                            releaseDate={movie.release_date}
                            width={789}
                            height={439}
                            posterUrl={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                            adult={movie.adult}
                            index={index + 1}
                            id={movie.id}
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