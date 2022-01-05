import React from 'react';

import { ReactComponent as SearchIcon } from '../../../assets/images/search-icon.svg';
import styles from './NoResults.module.scss';

const NoResults = () => {
    return (
        <div className={styles.noResults}>
            <SearchIcon className={styles.noResults__searchIcon}/>
            <span className={styles.noResults__main}>Sorry, we couldn't find any matches.</span>
            <span className={styles.noResults__sub}>Please try to apply different filter.</span>
        </div>
    );
};

export default NoResults;