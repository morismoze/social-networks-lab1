import React from 'react';

import Group from "./Group";
import { MOVIES_GROUPS } from "../../../constants/moviesNavigation";
import styles from './MoviesNavigation.module.scss';

const MoviesNavigation = () => {
    return (
        <div className={styles.moviesNav}>
            {MOVIES_GROUPS.map((group) => (
                <Group
                    id={group.id}
                    name={group.name}
                />
            ))}
        </div>
    );
};

export default MoviesNavigation;