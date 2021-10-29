const apiUrl = process.env.REACT_APP_API_BASE_URL;

const api = {
    movies: `${apiUrl}/movies`
};

export const moviePaths = {
    getRecommendedMovies: `${api.movies}/recommended-movies`,
    getTopRatedMovies: `${api.movies}/top-rated-movies`,
    getMovieDetails: (id) => `${api.movies}/details/${id}`,
};