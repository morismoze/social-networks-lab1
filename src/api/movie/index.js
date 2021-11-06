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
        console.error(err.response);
    }
};

export const getTopRatedMovies = async (page) => {
    try {
        const response = await instance.get(
            moviePaths.getTopRatedMovies(page),
            {
                headers: defaultHeaders
            }
        );

        return response.data;
    } catch (err) {
        console.error(err.response);
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
        console.error(err.response);
    }
};