const apiUrl = process.env.REACT_APP_API_BASE_URL;

const api = {
    movies: `${apiUrl}/movies`
};

export const moviePaths = {
    getRecommendedMovies: (page, limit) => `${api.movies}/recommended?page=${page}&limit=${limit}`,
    getTopRatedMovies: (page, limit) => `${api.movies}/top-rated?page=${page}&limit=${limit}`,
    getPopularMovies: (page, limit) => `${api.movies}/popular?page=${page}&limit=${limit}`,
    getFeaturedMovies: (limit) => `${api.movies}/featured?limit=${limit}`,
    getMoviesInTheaters: (limit) => `${api.movies}/in-theaters?limit=${limit}`,
    getRegionMovies: (country, limit) => `${api.movies}?region=${country}&limit=${limit}`,
    getLatestMovie: `${api.movies}/latest`,
    getMovieDetails: (id) => `${api.movies}/details/${id}`,
};