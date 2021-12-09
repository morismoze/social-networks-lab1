import { moviePaths } from "./paths";
import { defaultHeaders, instance } from "../network";

const RESULTS_PER_PAGE = 22;

export const getGenres = async () => {
    try {
        const response = await instance.get(
            moviePaths.getGenres,
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

export const getStatuses = async () => {
    try {
        const response = await instance.get(
            moviePaths.getStatuses,
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

export const getRecommendedMovies = async ({ page, genreFilters, statusFilters }) => {
    const genreString = genreFilters.join(',');
    const statusString = statusFilters.join(',');

    try {
        const response = await instance.get(
            moviePaths.getRecommendedMovies(page, RESULTS_PER_PAGE, genreString, statusString),
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

export const getTopRatedMovies = async ({ page, genreFilters, statusFilters }) => {
    const genreString = genreFilters.join(',');
    const statusString = statusFilters.join(',');

    try {
        const response = await instance.get(
            moviePaths.getTopRatedMovies(page, RESULTS_PER_PAGE, genreString, statusString),
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

export const getPopularMovies = async ({ page, genreFilters, statusFilters }) => {
    const genreString = genreFilters.join(',');
    const statusString = statusFilters.join(',');

    try {
        const response = await instance.get(
            moviePaths.getPopularMovies(page, RESULTS_PER_PAGE, genreString, statusString),
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

export const getRegionMovies = async (limit) => {
    try {
        const response = await instance.get(
            moviePaths.getRegionMovies(limit),
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

export const getTopRevenueMovies = async (limit) => {
    try {
        const response = await instance.get(
            moviePaths.getTopRevenueMovies(limit),
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

export const getMostVisitedMovies = async (limit) => {
    try {
        const response = await instance.get(
            moviePaths.getMostVisited(limit),
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

export const getPersonDetails = async (id) => {
    try {
        const response = await instance.get(
            moviePaths.getPersonDetails(id),
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