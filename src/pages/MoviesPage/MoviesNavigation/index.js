import React, { useEffect, useState } from 'react';

import { useLocation } from "react-router";
import { useDispatch } from "react-redux";

import Group from "./Group";
import AdvancedOptionsButton from "./AdvancedOptionsButton";
import AdvancedOptions from "./AdvancedOptions";
import { setActiveMovieGroup } from "../../../store/shared/navigation/Navigation.slice";
import { MOVIES_GROUPS } from "../../../constants/moviesNavigation";
import styles from './MoviesNavigation.module.scss';

const MoviesNavigation = ({
    page
}) => {
    const dispatch = useDispatch();

    const location = useLocation();

    const [ isAdvancedOptions, setIsAdvancedOptions ] = useState(false);

    const handleAdvancedOptions = () => {
        setIsAdvancedOptions(!isAdvancedOptions);
    }

    useEffect(() => {
        const activeMovieGroup = location.pathname.split('/')[2];
        dispatch(setActiveMovieGroup(activeMovieGroup));
    }, [location]);

    return (
        <>
            <div className={styles.moviesNav}>
                <div className={styles.moviesNav__groups}>
                    {MOVIES_GROUPS.map((group, index) => (
                        <Group
                            id={group.id}
                            name={group.name}
                            key={index}
                        />
                    ))}
                </div>
                <AdvancedOptionsButton
                    isOpen={isAdvancedOptions}
                    onClick={handleAdvancedOptions}
                />
            </div>
            <AdvancedOptions
                isOpen={isAdvancedOptions}
                page={page}
            />
        </>
    );
};

export default MoviesNavigation;