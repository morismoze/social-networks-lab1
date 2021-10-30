const apiUrl = process.env.REACT_APP_API_BASE_URL;

const api = {
    movies: `${apiUrl}/movies`
};

export const moviePaths = {
    getRecommendedMovies: `${api.movies}/recommended`,
    getTopRatedMovies: `${api.movies}/top-rated`,
    getMovieDetails: (id) => `${api.movies}/details/${id}`,
};