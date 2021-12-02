import React from 'react';

import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";

import RibbonButton from "../../../components/shared/userActivity/RibbonButton";
import * as UserSelectors from "../../../store/shared/user/User.selectors";
import { actions as userActions } from "../../../store/shared/user/User.actions";
import { formatPrice } from "../../../util/string";
import styles from './TopRevenueMovie.module.scss';
import classNames from "classnames";
import {Link} from "react-router-dom";

const TopRevenueMovie = ({
  movie,
  index
}) => {
    const dispatch = useDispatch();

    const { enqueueSnackbar } = useSnackbar();

    const userId = useSelector(UserSelectors.id);

    const watchlist = useSelector(UserSelectors.watchlist);

    const isAddedToWatchlist = watchlist.find(movieId => movieId === movie.id);

    const handleAddToWatchlist = () => {
        if (!userId) {
            enqueueSnackbar('You have to be logged in order to add a movie to the watchlist.', {
                variant: 'error'
            });
        } else {
            if (isAddedToWatchlist) {
                dispatch(userActions.removeFromWatchlist({ userId, movieId: movie.id }));
            } else {
                dispatch(userActions.addToWatchlist({ userId, movieId: movie.id }));
            }
        }
    };

    const revenue = formatPrice(movie.revenue);

    return (
        <div
            to={`/${movie.id}/details`}
            className={classNames(
                styles.topRevenueMovie,
                { [styles.even]: index % 2 === 0 },
                { [styles.odd]: index % 2 !== 0 }
            )}
        >
            <span className={styles.topRevenueMovie__index}>{index}</span>
            <div className={styles.topRevenueMovie__details}>
                <RibbonButton
                    onClick={handleAddToWatchlist}
                    active={isAddedToWatchlist}
                    className={styles.topRevenueMovie__watchlistBtn}
                />
                <Link
                    to={`/${movie.id}/details`}
                    className={styles.topRevenueMovie__dataWrapper}
                >
                    <span
                        title={movie.title}
                        className={styles.topRevenueMovie__title}
                    >
                        {movie.title}
                    </span>
                    <span className={styles.topRevenueMovie__revenue}>{revenue}</span>
                </Link>
            </div>
        </div>
    );
};

export default TopRevenueMovie;