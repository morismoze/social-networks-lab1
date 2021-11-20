import React from 'react';

import { useSelector } from "react-redux";

import Title from "../MoviesTable/Title";
import MoviesTable from "../MoviesTable";
import * as UserSelectors from '../../../store/shared/user/User.selectors';
import styles from './LikedList.module.scss';
import {Link} from "react-router-dom";

const LikedList = () => {

    const likedMovies = useSelector(UserSelectors.likedMovies);

    return (
        <div className={styles.likedList}>
            <Title title={'Movies You liked'}/>
            {likedMovies.length > 0 ? (
                <MoviesTable
                    type='liked-list'
                    moviesIds={likedMovies}
                />
            ) : (
                <div className={styles.likedList__wrapper}>
                    <span className={styles.likedList__emptyWatchlist}>
                        You haven't yet added any movie to your liked list.
                    </span>
                    &nbsp;
                    <Link
                        to={'/movies/top-rated'}
                        className={styles.likedList__exploreLink}
                    >
                        Start exploring!
                    </Link>
                </div>
            )}
        </div>
    );
};

export default LikedList;