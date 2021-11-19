import React from 'react';

import { useSelector } from "react-redux";

import Title from "../MoviesTable/Title";
import MoviesTable from "../MoviesTable";
import * as UserSelectors from '../../../store/shared/user/User.selectors';
import styles from './WatchList.module.scss';

const WatchList = () => {

    const watchlist = useSelector(UserSelectors.watchlist);

    return (
        <div className={styles.watchlist}>
            <Title title={'Your watchlist'}/>
            <MoviesTable
                type='watch-list'
                moviesIds={watchlist}
            />
        </div>
    );
};

export default WatchList;