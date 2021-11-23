import React, { useEffect, useState } from 'react';

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";

import Star from "./Star";
import * as UserSelectors from '../../../store/shared/user/User.selectors';
import { actions as userActions } from '../../../store/shared/user/User.actions';
import styles from './RatePicker.module.scss';

const RatePicker = () => {
    const dispatch = useDispatch();

    const params = useParams();

    const { enqueueSnackbar } = useSnackbar();

    const [ hoverIndex, setHoverIndex ] = useState(null);

    const [ selectedIndex, setSelectedIndex ] = useState(0);

    const ratings = useSelector(UserSelectors.ratings);
    const userId = useSelector(UserSelectors.id);

    const onMouseEnter = (index) => {
        setHoverIndex(index);
    };

    const onMouseLeave = () => {
        setHoverIndex(null);
    };

    const onClick = (index) => {
        if (!userId) {
            enqueueSnackbar('You have to be logged in order to rate a movie.', {
                variant: 'error'
            });
        } else {
            dispatch(userActions.addToRatings({
                userId: userId,
                movieId: params.id,
                rating: index + 1
            }));
            setSelectedIndex(index);
        }
    };

    useEffect(() => {
        const rating = ratings.find((ratingsObj) => Object.keys(ratingsObj)[0] === params.id);

        if (rating) {
            setSelectedIndex(Object.values(rating)[0] - 1);
        }
    }, [ratings]);

    return (
        <div className={styles.ratePicker}>
            <span className={styles.ratePicker__label}>Rate this movie:</span>
            <div className={styles.ratePicker__starsContainer}>
                {Array(10).fill('').map((item, index) =>(
                    <Star
                        index={index}
                        hoverIndex={hoverIndex}
                        selectedIndex={selectedIndex}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        onClick={onClick}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default RatePicker;