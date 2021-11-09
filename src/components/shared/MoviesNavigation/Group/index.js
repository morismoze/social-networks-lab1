import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import classNames from "classnames";

import * as NavigationSelectors from '../../../../store/shared/navigation/Navigation.selectors';
import styles from './Group.module.scss';

const Group = ({
    id,
    name
}) => {
    const activeMovieGroup = useSelector(NavigationSelectors.activeMovieGroup);

    return (
        <Link
            to={`/movies/${id}`}
            className={classNames(
                styles.group,
                { [styles['group--active']]: activeMovieGroup === id }
            )}
        >
            {name}
        </Link>
    );
};

export default Group