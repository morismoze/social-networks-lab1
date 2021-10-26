import React, { useEffect } from 'react';

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@mui/material";

import Header from "../../components/shared/Header";
import Backdrop from "./Backdrop";
import Poster from "./Poster";
import * as MovieSelectors from '../../store/shared/movie/Movie.selectors';
import { actions as movieActions } from '../../store/shared/movie/Movie.actions';
import { setActiveMovie } from "../../store/shared/movie/Movie.slice";
import styles from './MovieDetails.module.scss';

const MovieDetails = () => {
    const dispatch = useDispatch();

    const history = useHistory();

    const status = useSelector(MovieSelectors.status);
    const details = useSelector(MovieSelectors.activeIdDetails);
    const mainStats = useSelector(MovieSelectors.mainStats);

    const readMovieIdFromPath = (callback) => {
        const id = history.location.pathname.split('/').pop();

        dispatch(setActiveMovie(id));
        callback(id);
    };

    useEffect(() => {
        readMovieIdFromPath((activeId) => {
            dispatch(movieActions.getMovieDetailsAndToggleLoader(activeId))
        });
    }, []);

    return (
        <>
            <Header opacity={0.6}/>
            {status === 'success' &&
                <>
                    <div className={styles.movieDetails}>
                        <Backdrop
                            pictureUrl={details.backdrop_path}
                            mainStats={mainStats}
                            imdbId={details.imdb_id}
                        />
                    </div>
                    <Container
                        maxWidth='lg'
                        className={styles.movieDetails__detailsSection}
                    >
                        <div className={styles.movieDetails__sidebar}>
                            <Poster
                                src={`https://image.tmdb.org/t/p/w300${details.poster_path}`}
                                alt={details.original_title}
                            />
                        </div>
                        <div className={styles.movieDetails__data}>

                        </div>
                    </Container>
                </>
            }
        </>
    );
};

export default MovieDetails;