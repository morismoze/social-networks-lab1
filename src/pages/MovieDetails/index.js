import React, { useEffect } from 'react';

import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@mui/material";

import Header from "../../components/shared/Header";
import Backdrop from "./Backdrop";
import Poster from "./Poster";
import Sidenav from "./Sidenav";
import WithParagraphLayoutWrapper from "./withParagraphLayoutWrapper";
import Overview from "./Overview";
import Tagline from "./Overview/Tagline";
import CastMember from "./Overview/CastMember";
import Trailer from "./Trailer";
import Production from "./Production";
import RatePicker from "./RatePicker";
import * as MovieSelectors from '../../store/shared/movie/Movie.selectors';
import { actions as movieActions } from '../../store/shared/movie/Movie.actions';
import { setActiveMovie } from "../../store/shared/movie/Movie.slice";
import {setActiveTab} from "../../store/shared/navigation/Navigation.slice";
import { extractYearFromReleaseDate, sortObjectsByProperty } from "../../util/string";
import { movieDetailsNavItems } from "../../constants/movieDetails";
import styles from './MovieDetails.module.scss';

const MovieDetails = () => {
    const dispatch = useDispatch();

    const params = useParams();

    const history = useHistory();

    const status = useSelector(MovieSelectors.status);
    const details = useSelector(MovieSelectors.activeIdDetails);
    const mainStats = useSelector(MovieSelectors.mainStats);
    const genres = useSelector(MovieSelectors.genres);
    const released = useSelector(MovieSelectors.released);
    const spokenLanguages = useSelector(MovieSelectors.spokenLanguages);
    const budget = useSelector(MovieSelectors.budget);
    const ytVideo = useSelector(MovieSelectors.ytVideo);

    const releaseYear = extractYearFromReleaseDate(details?.release_date);

    const readMovieIdFromPath = (callback) => {
        const id = history.location.pathname.split('/').pop();

        dispatch(setActiveMovie(id));
        callback(id);
    };

    useEffect(() => {
        readMovieIdFromPath((activeId) => {
            dispatch(movieActions.getMovieDetailsAndToggleLoader(activeId))
        });
        dispatch(setActiveTab(params[0]));
    }, []);

    return (
        <>
            <Header opacity={0.6}/>
            {status === 'success' &&
                <>
                    <div className={styles.movieDetails}>
                        <Backdrop
                            movieName={details.title}
                            releaseYear={releaseYear}
                            pictureUrl={details.backdrop_path}
                            mainStats={mainStats}
                            imdbId={details.imdb_id}
                        />
                        <Container
                            maxWidth='lg'
                            className={styles.movieDetails__detailsSection}
                        >
                            <div className={styles.movieDetails__sidenavWrapper}>
                                <Poster
                                    src={`https://image.tmdb.org/t/p/w300${details.poster_path}`}
                                    width={300}
                                    height={450}
                                    alt={details.original_title}
                                />
                                <Sidenav/>
                                <RatePicker/>
                            </div>
                            <div className={styles.movieDetails__data}>
                                {details.tagline &&
                                    <Tagline tagline={details.tagline}/>
                                }
                                <div className={styles.movieDetails__paragraphsWrapper}>
                                    {movieDetailsNavItems.map((item, index, arr) => {
                                        switch (item) {
                                            case arr[0]: {
                                                return (
                                                    <WithParagraphLayoutWrapper
                                                        title={item}
                                                        className={styles.movieDetails__paragraph}
                                                        key={index}
                                                    >
                                                        <Overview
                                                            synopsys={details.overview}
                                                            genres={genres}
                                                            released={released}
                                                            adult={details.adult ? 'Yes' : 'No'}
                                                            budget={budget}
                                                            spokenLanguages={spokenLanguages}
                                                        />
                                                    </WithParagraphLayoutWrapper>
                                                )
                                            }
                                            case arr[1]: {
                                                return (
                                                    <WithParagraphLayoutWrapper
                                                        title={item}
                                                        className={styles.movieDetails__paragraph}
                                                        key={index}
                                                    >
                                                        <div className={styles.movieDetails__castWrapper}>
                                                            {details.cast.slice().sort(sortObjectsByProperty('popularity')).map((member, index) => (
                                                                <CastMember
                                                                    pictureLink={
                                                                        member.profile_path ?
                                                                            `https://image.tmdb.org/t/p/w154${member.profile_path}`
                                                                            :
                                                                            null
                                                                    }
                                                                    width={154}
                                                                    height={231}
                                                                    name={member.name}
                                                                    character={member.character}
                                                                    key={index}
                                                                />
                                                            ))}
                                                        </div>
                                                    </WithParagraphLayoutWrapper>
                                                )
                                            }
                                            case arr[2]: {
                                                return (
                                                    <WithParagraphLayoutWrapper
                                                        title={item}
                                                        className={styles.movieDetails__paragraph}
                                                        key={index}
                                                    >
                                                        <Production
                                                            companies={details.production_companies}
                                                            countries={details.production_countries}
                                                        />
                                                    </WithParagraphLayoutWrapper>
                                                )
                                            }
                                            case arr[3]: {
                                                return (
                                                    <WithParagraphLayoutWrapper
                                                        title={item}
                                                        className={styles.movieDetails__paragraph}
                                                        key={index}
                                                    >
                                                        <Trailer info={ytVideo}/>
                                                    </WithParagraphLayoutWrapper>
                                                )
                                            }
                                        }
                                    })}
                                </div>
                            </div>
                        </Container>
                    </div>
                </>
            }
        </>
    );
};

export default MovieDetails;