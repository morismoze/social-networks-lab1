import React from 'react';

import { useSelector, useDispatch } from "react-redux";
import { Container, Fade } from "@mui/material";

import Stat from "./Stat";
import ImageLink from "../../../components/shared/ImageLink";
import ReleaseYear from "./ReleaseYear";
import HeartButton from "../../../components/shared/userActivity/HeartButton";
import AddButton from "../../../components/shared/userActivity/AddButton";
import * as UserSelectors from "../../../store/shared/user/User.selectors";
import { actions as userActions } from "../../../store/shared/user/User.actions";
import ImdbIcon from '../../../assets/images/imdb_logo.png';
import Fallback from '../../../assets/images/movie-backdrop-fallback.png';
import styles from './Backdrop.module.scss';

const Backdrop = ({
    id,
    movieName,
    releaseYear,
    pictureUrl,
    mainStats,
    imdbId
}) => {
    const dispatch = useDispatch();

    const picture = pictureUrl ? `url(${pictureUrl})` : `url(${Fallback})`;

    const userId = useSelector(UserSelectors.id);
    const likedMovies = useSelector(UserSelectors.likedMovies);
    const watchlist = useSelector(UserSelectors.watchlist);

    const isLiked = likedMovies.find(movieId => movieId === id);

    const isAddedToWatchlist = watchlist.find(movieId => movieId === id);

    const handleMovieLike = () => {
        if (isLiked) {
            dispatch(userActions.removeFromLikes({ userId, movieId: id }));
        } else {
            dispatch(userActions.addToLikes({ userId, movieId: id }));
        }
    };

    const handleToggleWatchlist = () => {
        if (isAddedToWatchlist) {
            dispatch(userActions.removeFromWatchlist({ userId, movieId: id }));
        } else {
            dispatch(userActions.addToWatchlist({ userId, movieId: id }));
        }
    };

    return (
        <Fade
            timeout={1500}
            in={true}
        >
            <div className={styles.backdrop}>
                <div
                    className={styles.backdrop__img}
                    style={{ backgroundImage: picture }}
                />
                <div className={styles.backdrop__movieNameShadow}/>
                <div className={styles.backdrop__movieName}>
                    <Container
                        maxWidth='lg'
                        className={styles.backdrop__movieAndReleased}
                    >
                        <h1 className={styles.backdrop__name}>{movieName}</h1>
                        <ReleaseYear year={releaseYear}/>
                    </Container>
                </div>
                <div className={styles.backdrop__stats}>
                    <Container
                        maxWidth='lg'
                        className={styles.backdrop__statsAndLinks}
                    >
                        <div className={styles.backdrop__statsValues}>
                            {Object.keys(mainStats).map((stat, index) => (
                                <Stat
                                    name={stat} value={mainStats[stat]}
                                    key={index}
                                />
                            ))}
                            <div className={styles.backdrop__activity}>
                                <HeartButton
                                    onClick={handleMovieLike}
                                    active={isLiked}
                                />
                                <AddButton
                                    onClick={handleToggleWatchlist}
                                    active={isAddedToWatchlist}
                                />
                            </div>
                        </div>
                        <div className={styles.backdrop__links}>
                            {imdbId &&
                                <ImageLink
                                    href={`https://imdb.com/title/${imdbId}`}
                                    picture={ImdbIcon}
                                />
                            }
                        </div>
                    </Container>
                </div>
            </div>
        </Fade>
    );
};

export default Backdrop;