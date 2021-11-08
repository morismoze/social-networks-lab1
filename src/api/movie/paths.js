const apiUrl = process.env.REACT_APP_API_BASE_URL;

const api = {
    movies: `${apiUrl}/movies`
};

export const moviePaths = {
    getRecommendedMovies: (page, limit) => `${api.movies}/recommended?page=${page}&limit=${limit}`,
    getTopRatedMovies: (page, limit) =>`${api.movies}/top-rated?page=${page}&limit=${limit}`,
    getMovieDetails: (id) => `${api.movies}/details/${id}`,
};