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
    getLikedMovies: (id) => `${api.users}/${id}/movies/likes`,
    storeUserLike: (id) => `${api.users}/${id}/movies/like`,
    storeUserUnlike: (id) => `${api.users}/${id}/movies/unlike`,
    getUserCountry: (lat, lon) => `${api.location}/reverse?lat=${lat}&lon=${lon}&apiKey=${geoapifyApiKey}`
};