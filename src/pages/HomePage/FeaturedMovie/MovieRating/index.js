import React from 'react';

import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

import { getDecimalRatingValue, setFixedNumberOfDecimals } from "../../../../util/string";
import colors from '../../../../styles/colors.module.scss';
import styles from './MovieRating.module.scss';

export const NUMBER_OF_STARS = 5;

const MovieRating = ({
    rating
}) => {
    const decimalRatingValue = getDecimalRatingValue(rating);

    const formattedValue = setFixedNumberOfDecimals(rating);

    return (
        <div className={styles.rating}>
            <Rating
                name="rating"
                value={decimalRatingValue * NUMBER_OF_STARS}
                readOnly
                precision={0.25}
                icon={
                    <StarIcon
                        className={styles.rating__star}
                        htmlColor={colors.yellow}
                        fontSize='small'
                    />
                }
                emptyIcon={
                    <StarIcon
                        htmlColor='transparent'
                        fontSize='small'
                        style={{
                            stroke: colors.yellow,
                            strokeWidth: '1px'
                        }}
                    />
                }
                title={formattedValue}
            />
            <span className={styles.rating__value}>
                {formattedValue ? (
                    formattedValue
                ) : (
                    '--'
                )}
            </span>
        </div>
    );
};

export default MovieRating;