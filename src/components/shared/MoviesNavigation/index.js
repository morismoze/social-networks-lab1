import React, { useEffect } from 'react';

import { useLocation } from "react-router";
import { useDispatch } from "react-redux";

import Group from "./Group";
import { setActiveMovieGroup } from "../../../store/shared/navigation/Navigation.slice";
import { MOVIES_GROUPS } from "../../../constants/moviesNavigation";
import styles from './MoviesNavigation.module.scss';

const MoviesNavigation = () => {
    const dispatch = useDispatch();

    const location = useLocation();

    useEffect(() => {
        const activeMovieGroup = location.pathname.split('/')[2];
        dispatch(setActiveMovieGroup(activeMovieGroup));
    }, [location])

    return (
        <div className={styles.moviesNav}>
            {MOVIES_GROUPS.map((group, index) => (
                <Group
                    id={group.id}
                    name={group.name}
                    key={index}
                />
            ))}
        </div>
    );
};

export default MoviesNavigation;