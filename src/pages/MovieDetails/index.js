import React, { useEffect } from 'react';

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@mui/material";

import Header from "../../components/shared/Header";
import Backdrop from "./Backdrop";
import Poster from "./Poster";
import Sidenav from "./Sidenav";
import * as MovieSelectors from '../../store/shared/movie/Movie.selectors';
import { actions as movieActions } from '../../store/shared/movie/Movie.actions';
import { setActiveMovie } from "../../store/shared/movie/Movie.slice";
import styles from './MovieDetails.module.scss';
import {movieDetailsNavItems} from "../../constants/movieDetails";
import WithParagraphLayoutWrapper from "./withParagraphLayoutWrapper";
import Overview from "./Overview";
import Tagline from "./Overview/Tagline";

const MovieDetails = () => {
    const dispatch = useDispatch();

    const history = useHistory();

    const status = useSelector(MovieSelectors.status);
    const details = useSelector(MovieSelectors.activeIdDetails);
    const mainStats = useSelector(MovieSelectors.mainStats);
    const genres = useSelector(MovieSelectors.genres);
    const released = useSelector(MovieSelectors.released);
    const spokenLanguages = useSelector(MovieSelectors.spokenLanguages);
    const budget = useSelector(MovieSelectors.budget);

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
                        <div className={styles.movieDetails__sidenavWrapper}>
                            <Poster
                                src={`https://image.tmdb.org/t/p/w300${details.poster_path}`}
                                alt={details.original_title}
                            />
                            <Sidenav/>
                        </div>
                        <div className={styles.movieDetails__data}>
                            {details.tagline &&
                                <Tagline tagline={details.tagline}/>
                            }
                            <div className={styles.movieDetails__paragraphsWrapper}>
                                {movieDetailsNavItems.map((item, index, arr) => {
                                    switch (item) {
                                        case arr[0]: {
                                            return <WithParagraphLayoutWrapper title={item}>
                                                <Overview
                                                    synopsys={details.overview}
                                                    genres={genres}
                                                    released={released}
                                                    adult={details.adult ? 'Yes' : 'No'}
                                                    budget={budget}
                                                    spokenLanguages={spokenLanguages}
                                                />
                                            </WithParagraphLayoutWrapper>
                                        }
                                        case arr[1]: {
                                            return <WithParagraphLayoutWrapper title={item}>

                                            </WithParagraphLayoutWrapper>
                                        }
                                        case arr[2]: {
                                            return <WithParagraphLayoutWrapper title={item}>

                                            </WithParagraphLayoutWrapper>
                                        }
                                    }
                                })}
                            </div>
                        </div>
                    </Container>
                </>
            }
        </>
    );
};

export default MovieDetails;