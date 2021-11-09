const apiUrl = process.env.REACT_APP_API_BASE_URL;

const api = {
    users: `${apiUrl}/users`
};

export const user = {
    storeUserData: `${api.users}/create`,
    getUserData: `${api.users}/current`,
    getLikedMovies: (id) => `${api.users}/${id}/movies/likes`,
    storeUserLike: (id) => `${api.users}/${id}/movies/like`,
    storeUserUnlike: (id) => `${api.users}/${id}/movies/unlike`,
};