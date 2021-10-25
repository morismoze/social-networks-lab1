const apiUrl = process.env.REACT_APP_API_BASE_URL;

const api = {
    details: `${apiUrl}/movies/details`
};

export const moviePaths = {
    getMovieDetails: (id) => `${api.details}/${id}`,
};