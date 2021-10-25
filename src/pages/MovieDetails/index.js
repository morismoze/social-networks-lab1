import React, { useEffect } from 'react';

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@mui/material";

import Header from "../../components/shared/Header";
import Image from "./Image";
import * as MovieSelectors from '../../store/shared/movie/Movie.selectors';
import { actions as movieActions } from '../../store/shared/movie/Movie.actions';
import styles from './MovieDetails.module.scss';
import {setActiveMovie} from "../../store/shared/movie/Movie.slice";

const MovieDetails = () => {
    const dispatch = useDispatch();

    const history = useHistory();

    const status = useSelector(MovieSelectors.status)
    const activeId = useSelector(MovieSelectors.activeId);
    const details = useSelector(MovieSelectors.activeIdDetails);

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
                        <Image pictureUrl={details.backdrop_path}/>
                    </div>
                    <Container maxWidth='md'>

                    </Container>
                </>
            }
        </>
    );
};

export default MovieDetails;