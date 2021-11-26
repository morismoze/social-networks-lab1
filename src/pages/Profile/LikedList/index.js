import React from 'react';

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

import Title from "../MoviesTable/Title";
import MoviesTable from "../MoviesTable";
import MoviesMobileList from "../MoviesMobileList";
import * as UserSelectors from '../../../store/shared/user/User.selectors';
import styles from './LikedList.module.scss';

const LikedList = () => {
    const userName = useSelector(UserSelectors.name);
    const likedMovies = useSelector(UserSelectors.likedMovies);

    return (
        <>
            <Helmet>
                <title>{userName} - Liked list &bull; Recommend.me</title>
            </Helmet>
            <div className={styles.likedList}>
                <Title title={'Movies You liked'}/>
                {likedMovies.length > 0 ? (
                    <>
                        <MoviesTable
                            type='liked-list'
                            moviesIds={likedMovies}
                        />
                        <MoviesMobileList
                            type='liked-list'
                            moviesIds={likedMovies}
                        />
                    </>
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
        </>
    );
};

export default LikedList;