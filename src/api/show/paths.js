const apiUrl = process.env.REACT_APP_API_BASE_URL;

const api = {
    shows: `${apiUrl}/shows`
};

export const showPaths = {
    getPopularShows: `${api.shows}/popular`
};