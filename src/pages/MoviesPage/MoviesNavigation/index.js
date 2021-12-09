import React, { useEffect, useState } from 'react';

import { useLocation } from "react-router";
import { useDispatch } from "react-redux";

import AdvancedOptionsButton from "./AdvancedOptionsButton";
import AdvancedOptions from "./AdvancedOptions";
import Groups from "./Groups";
import { setActiveMovieGroup } from "../../../store/shared/navigation/Navigation.slice";
import { useWindowSize } from "../../../hooks/useWindowSize";
import styles from './MoviesNavigation.module.scss';

const MoviesNavigation = ({
    page
}) => {
    const dispatch = useDispatch();

    const location = useLocation();

    const { width } = useWindowSize();

    const [ isAdvancedOptions, setIsAdvancedOptions ] = useState(false);

    const handleAdvancedOptions = () => {
        setIsAdvancedOptions(!isAdvancedOptions);
    };

    useEffect(() => {
        const activeMovieGroup = location.pathname.split('/')[2];
        dispatch(setActiveMovieGroup(activeMovieGroup));
    }, [location]);

    return (
        <>
            <div className={styles.moviesNav}>
                {width > 576 &&
                    <Groups/>
                }
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