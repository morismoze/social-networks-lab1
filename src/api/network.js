import axios from "axios";

export const instance = axios.create();

instance.interceptors.request.use((config) => {
    // @todo: attach token auth only on particular list of routes
    const token = localStorage.getItem('fb_token');
    config.headers.Authorization = `Bearer ${token}`;

    return config;
}, (error) => {
    // @todo: handle REQUEST errors
});

export const setResponsesInterceptor = (navigate) => {
    instance.interceptors.response.use((response) => {
        return response;
    }, (error) => {console.log(error)
        if (error.response.status === 401) {
            navigate('/auth');
        }
    });
}

export const defaultHeaders = {
    'Content-Type': 'application/json'
};