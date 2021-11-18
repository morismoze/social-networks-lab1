import React from 'react';

import MoviesTable from "../MoviesTable";
import * as UserSelectors from '../../../store/shared/user/User.selectors';
import styles from './WatchList.module.scss';
import { useSelector } from "react-redux";

const WatchList = () => {

    const watchlist = useSelector(UserSelectors.watchlist);


    return (
        <div className={styles.watchlist}>
            <MoviesTable
                moviesIds={watchlist}
            />
        </div>
    );
};

export default WatchList;