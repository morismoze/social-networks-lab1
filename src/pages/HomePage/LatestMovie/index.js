import React from 'react';

import MovieCard from "../../../components/shared/MovieCard";

const LatestMovie = ({
    movie
}) => {
    return (
        <MovieCard
            movie={movie}
            width={780}
            height={439}
        />
    );
};

export default LatestMovie;