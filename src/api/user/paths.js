const apiUrl = process.env.REACT_APP_API_BASE_URL;

const api = {
    users: `${apiUrl}/users`
};

export const user = {
    storeUserData: () => `${api.users}/create`,
    getRecommendedMovies: (id) => `${api.users}/${id}/recommended-movies`,
    getTopRatedMovies: (id) => `${api.users}/${id}/top-rated-movies`
};