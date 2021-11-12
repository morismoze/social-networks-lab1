import React from 'react';

import { useNavigate } from "react-router-dom";

import MovieRating from "../MovieRating";
import Button from "../../../../../components/shared/Button";
import styles from './MovieData.module.scss';

const MovieData = ({
    id,
    name,
    rating,
    genres,
    synopsys
}) => {
    const navigate = useNavigate();

    const handleOnDetailsClick = () => {
        navigate(`/${id}/details`);
    };

    return (
        <div className={styles.data}>
            <span className={styles.data__name}>{name}</span>
            <p className={styles.data__synopsys}>{synopsys}</p>
            <div className={styles.data__footer}>
                <MovieRating rating={rating}/>
                <Button
                    onClick={handleOnDetailsClick}
                    fill={false}
                />
            </div>
        </div>
    );
}

export default MovieData;