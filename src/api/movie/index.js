import { moviePaths } from "./paths";

const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

export const getRecommendedMovies = async () => {
    try {
        const response = await fetch(moviePaths.getRecommendedMovies, {
                method: 'GET',
                headers: defaultHeaders
            }
        );

        return response.json();
    } catch (err) {
        console.error(err);
    }
};

export const getTopRatedMovies = async () => {
    try {
        const response = await fetch(moviePaths.getTopRatedMovies, {
                method: 'GET',
                headers: defaultHeaders
            }
        );

        return response.json();
    } catch (err) {
        console.error(err);
    }
};

export const getMovieDetails = async (id) => {
    try {
        const response = await fetch(moviePaths.getMovieDetails(id), {
                method: 'GET',
                headers: defaultHeaders
            }
        );

        return response.json();
    } catch (err) {
        console.error(err);
    }
};