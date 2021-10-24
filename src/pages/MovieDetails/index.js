import React, {useEffect} from 'react';

import { useHistory } from "react-router-dom";

import Header from "../../components/shared/Header";
import WithLayoutWrapper from "../../components/shared/withLayoutWrapper";
import styles from './MovieDetails.module.scss';

const MovieDetails = () => {
    const history = useHistory();

    const decodeMovieName = () => {
        const path = history.location.pathname;
        const movieName = decodeURI(path).split('/').pop();
        // @todo: get movie details
    };

    useEffect(() => {
        decodeMovieName();
    }, []);

    return (
        <>
            <Header/>
            <WithLayoutWrapper>
                <div className={styles.movieDetailsContainer}>
                    movie details
                </div>
            </WithLayoutWrapper>
        </>
    );
};

export default MovieDetails;