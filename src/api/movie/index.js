import { moviePaths } from "./paths";
import { defaultHeaders, instance } from "../network";

const RESULTS_PER_PAGE = 22;

export const getRecommendedMovies = async (page) => {
    try {
        const response = await instance.get(
            moviePaths.getRecommendedMovies(page, RESULTS_PER_PAGE),
            {
                headers: defaultHeaders
            }
        );

        return response.data;
    } catch (err) {
        console.error(err);
        return Promise.reject(err.statusText);
    }
};

export const getTopRatedMovies = async (page) => {
    try {
        const response = await instance.get(
            moviePaths.getTopRatedMovies(page, RESULTS_PER_PAGE),
            {
                headers: defaultHeaders
            }
        );

        return response.data;
    } catch (err) {
        console.error(err);
        return Promise.reject(err.statusText);
    }
};

export const getPopularMovies = async (page) => {
    try {
        const response = await instance.get(
            moviePaths.getPopularMovies(page, RESULTS_PER_PAGE),
            {
                headers: defaultHeaders
            }
        );

        return response.data;
    } catch (err) {
        console.error(err);
        return Promise.reject(err.statusText);
    }
};

export const getFeaturedMovies = async (limit) => {
    try {
        const response = await instance.get(
            moviePaths.getFeaturedMovies(limit),
            {
                headers: defaultHeaders
            }
        );

        return response.data;
    } catch (err) {
        console.error(err);
        return Promise.reject(err.statusText);
    }
};

export const getMoviesInTheaters = async (limit) => {
    try {
        const response = await instance.get(
            moviePaths.getMoviesInTheaters(limit),
            {
                headers: defaultHeaders
            }
        );

        return response.data;
    } catch (err) {
        console.error(err);
        return Promise.reject(err.statusText);
    }
};

export const getRegionMovies = async ({ country, limit }) => {
    try {
        const response = await instance.get(
            moviePaths.getRegionMovies(country, limit),
            {
                headers: defaultHeaders
            }
        );

        return response.data;
    } catch (err) {
        console.error(err);
        return Promise.reject(err.statusText);
    }
};

export const getLatestMovie = async () => {
    try {
        const response = await instance.get(
            moviePaths.getLatestMovie,
            {
                headers: defaultHeaders
            }
        );

        return response.data;
    } catch (err) {
        console.error(err);
        return Promise.reject(err.statusText);
    }
};

export const getMovieDetails = async (id) => {
    try {
        const response = await instance.get(
            moviePaths.getMovieDetails(id),
            {
                headers: defaultHeaders
            }
        );

        return response.data;
    } catch (err) {
        console.error(err);
        return Promise.reject(err.statusText);
    }
};