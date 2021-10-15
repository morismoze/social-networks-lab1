import React from 'react';

import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

import {getDecimalRatingValue, getFormattedRatingValue} from "../../../../util/string";
import colors from '../../../../styles/colors.module.scss';
import styles from './MovieRating.module.scss';

const MovieRating = ({
    rating
}) => {
    const decimalRatingValue = getDecimalRatingValue(rating);

    const formattedValue = getFormattedRatingValue(rating);

    return (
        <div className={styles.rating}>
            <Rating
                name="rating"
                value={decimalRatingValue * 5}
                readOnly
                precision={0.25}
                icon={
                    <StarIcon
                        className={styles.rating__star}
                        htmlColor={colors.yellow}
                        fontSize={'small'}
                    />
                }
                emptyIcon={
                    <StarIcon
                        htmlColor={colors.white}
                        fontSize={'small'}
                        style={{ stroke: colors.yellow, strokeWidth: '1px' }}
                    />
                }
                title={formattedValue}
            />
            <span className={styles.rating__value}>{formattedValue}</span>
        </div>
    );
};

export default MovieRating;