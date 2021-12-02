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
    getRegionMovies: (limit) => `${api.movies}/region?limit=${limit}`,
    getTopRevenueMovies: (limit) => `${api.movies}/top-revenue?limit=${limit}`,
    getMostVisited: (limit) => `${api.movies}/most-visited?limit=${limit}`,
    getMovieDetails: (id) => `${api.movies}/${id}/details`,
    getPersonDetails: (id) => `${api.movies}/people/${id}/details`,
};