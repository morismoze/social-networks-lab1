import React from 'react';

import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import * as UserSelectors from '../../../store/shared/user/User.selectors';
import { actions as userActions } from "../../../store/shared/user/User.actions";
import styles from './GenreCard.module.scss';

const GenreCard = ({
    genre
}) => {
    const dispatch = useDispatch();

    const userId = useSelector(UserSelectors.id);
    const favouriteGenres = useSelector(UserSelectors.favouriteGenres);

    const isPicked = favouriteGenres.find(genreId => genreId === genre.id);

    const handleOnCLick = () => {
        if (isPicked) {
            dispatch(userActions.removeFromFavouriteGenres({ userId, genreId: genre.id }));
        } else {
            dispatch(userActions.addToFavouriteGenres({ userId, genreId: genre.id }));
        }
    };

    return (
        <div
            onClick={handleOnCLick}
            className={classNames(
                styles.genre,
                { [styles['genre--active']]: isPicked }
            )}
        >
            <span className={styles.genre__name}>{genre.name}</span>
        </div>
    );
};

export default GenreCard;