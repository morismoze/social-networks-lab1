import React from 'react';

import { useSelector } from "react-redux";

import Title from "../MoviesTable/Title";
import MoviesTable from "../MoviesTable";
import * as UserSelectors from '../../../store/shared/user/User.selectors';
import styles from './WatchList.module.scss';
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

const WatchList = () => {
    const userName = useSelector(UserSelectors.name);
    const watchlist = useSelector(UserSelectors.watchlist);

    return (
        <>
            <Helmet>
                <title>{userName} - Watchlist &bull; Recommend.me</title>
            </Helmet>
            <div className={styles.watchlist}>
                <Title title={'Your watchlist'}/>
                {watchlist.length > 0 ? (
                    <MoviesTable
                        type='watch-list'
                        moviesIds={watchlist}
                    />
                ) : (
                    <div className={styles.watchlist__wrapper}>
                    <span className={styles.watchlist__emptyWatchlist}>
                        You haven't yet added any movie to your watchlist.
                    </span>
                        &nbsp;
                        <Link
                            to={'/movies/top-rated'}
                            className={styles.watchlist__exploreLink}
                        >
                            Start exploring!
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default WatchList;