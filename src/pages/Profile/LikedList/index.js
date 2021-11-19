import React from 'react';

import { useSelector } from "react-redux";

import Title from "../MoviesTable/Title";
import MoviesTable from "../MoviesTable";
import * as UserSelectors from '../../../store/shared/user/User.selectors';
import styles from './LikedList.module.scss';

const LikedList = () => {

    const likedMovies = useSelector(UserSelectors.likedMovies);

    return (
        <div className={styles.likedList}>
            <Title title={'Movies You liked'}/>
            <MoviesTable
                type='liked-list'
                moviesIds={likedMovies}
            />
        </div>
    );
};

export default LikedList;