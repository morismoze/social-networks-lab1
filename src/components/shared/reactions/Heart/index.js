import React, {useEffect, useState} from 'react';

import { useSelector } from "react-redux";
import classNames from "classnames";
import { AiFillHeart } from "react-icons/all";

import StyledTooltip from "../../StyledTooltip";
import * as UserActivitySelectors from '../../../../store/shared/userActivity/UserActivity.selectors';
import styles from './Heart.module.scss';

const Heart = ({
    onClick,
    id
}) => {
    const [ isLiked, setIsLiked ] = useState(false);

    const likedMovies = useSelector(UserActivitySelectors.likedMovies);

    const handleOnClick = () => {
        onClick();
    };

    useEffect(() => {
        const isMovieLiked = likedMovies?.find(movieId => movieId === id);

        if (isMovieLiked) {
            setIsLiked(true);
        } else {
            setIsLiked(false);
        }
    }, [id, likedMovies]);

    return (
        <StyledTooltip title={!isLiked ? 'Like' : 'Dislike'}>
            <div
                className={styles.heartReaction}
                onClick={handleOnClick}
            >
                <AiFillHeart
                    size={25}
                    className={classNames(
                        styles.heartReaction__icon,
                        { [styles.heartReaction__isActive]: isLiked }
                    )}
                />
            </div>
        </StyledTooltip>
    );
};

export default Heart;