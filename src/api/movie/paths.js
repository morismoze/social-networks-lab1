const apiUrl = process.env.REACT_APP_API_BASE_URL

const api = {
    featuredMovie: `${apiUrl}/movie/featured`
};

export const moviePaths = {
    getFeaturedMovie: () => api.featuredMovie
};