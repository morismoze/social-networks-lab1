const apiUrl = process.env.REACT_APP_API_BASE_URL;

const geoapifyUrl = process.env.REACT_APP_GEOAPIFY;
const geoapifyApiKey = process.env.REACT_APP_GEOAPIFY_API_KEY;

const api = {
    users: `${apiUrl}/users`,
    location: `${geoapifyUrl}`
};

export const user = {
    storeUserData: `${api.users}/create`,
    getUserData: `${api.users}/current`,
    addToLikes: (id) => `${api.users}/${id}/movies/likes/add`,
    removeFromLikes: (id) => `${api.users}/${id}/movies/likes/remove`,
    addToWatchlist: (id) => `${api.users}/${id}/movies/watchlist/add`,
    removeFromWatchlist: (id) => `${api.users}/${id}/movies/watchlist/remove`,
    addToRatings: (id) => `${api.users}/${id}/movies/rate`,
};