import React from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import * as NavigationSelectors from '../../../../store/shared/navigation/Navigation.selectors';
import { setActiveMovieGroup } from "../../../../store/shared/navigation/Navigation.slice";
import styles from './Group.module.scss';

const Group = ({
    id,
    name
}) => {
    const dispatch = useDispatch();

    const activeMovieGroup = useSelector(NavigationSelectors.activeMovieGroup);

    const handleOnClick = () => {
        dispatch(setActiveMovieGroup(id));
    };

    return (
        <Link
            to={`/movies/${id}`}
            onClick={handleOnClick}
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