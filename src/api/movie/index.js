import { moviePaths } from "./paths";

const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

const RESULTS_PER_PAGE = 22;

export const getRecommendedMovies = async (page) => {
    try {
        const response = await fetch(moviePaths.getRecommendedMovies(page, RESULTS_PER_PAGE), {
                method: 'GET',
                headers: defaultHeaders
            }
        );

        return response.json();
    } catch (err) {
        console.error(err);
    }
};

export const getTopRatedMovies = async (page) => {
    try {
        const response = await fetch(moviePaths.getTopRatedMovies(page), {
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