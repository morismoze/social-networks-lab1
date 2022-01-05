import React from 'react';

import { ReactComponent as UserRating } from '../../../assets/images/user-rating.svg';
import styles from './NoUserRatings.module.scss';

const NoUserRatings = () => {
    return (
        <div className={styles.noUserRatings}>
            <UserRating className={styles.noUserRatings__ratingIcon}/>
            <span className={styles.noUserRatings__main}>Please rate a few movies for better recommendation.</span>
        </div>
    );
};

export default NoUserRatings;