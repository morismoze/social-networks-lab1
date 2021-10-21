const apiUrl = process.env.REACT_APP_API_BASE_URL;
const movieDbUrl = process.env.REACT_APP_MOVIEDB_URL;

const api = {
    featuredMovie: `${apiUrl}/movie/featured`,
    popularMovies: `${movieDbUrl}/movie/popular`
};

const appendApiKey = (url) => {
    const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;

    return `${url}?api_key=${API_KEY}`;
};

export const moviePaths = {
    getFeaturedMovie: api.featuredMovie,
    getPopularMovies: appendApiKey(api.popularMovies)
};