import { moviePaths } from "./paths";
import { defaultHeaders, instance } from "../network";

const RESULTS_PER_PAGE = 22;

const HOMEPAGE_CAROUSEL_ITEMS = 5;

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
            moviePaths.getFeaturedMovie(limit),
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