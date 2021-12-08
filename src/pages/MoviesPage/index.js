import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import MoviesRoutes from "../../router/MoviesRoutes";
import Header from "../../components/shared/Header";
import * as MovieDataListSelectors from '../../store/shared/movie/DataList.selectors';
import { actions as movieDataListActions } from '../../store/shared/movie/DataList.actions';

const MoviesPage = () => {
    const dispatch = useDispatch();

    const { genres, statuses } = useSelector(MovieDataListSelectors.list);

    useEffect(() => {
        if (genres.length === 0) {
            dispatch(movieDataListActions.getGenresAndToggleLoader());
        }

        if (statuses.length === 0) {
            dispatch(movieDataListActions.getStatusesAndToggleLoader());
        }
    }, []);

    return (
        <>
            <Header/>
            <MoviesRoutes/>
        </>
    );
};

export default MoviesPage;