export const getSearchParamsFromHash = (hash) => {
    const params = hash.substring(1).split('&');
    let searchParams = {};

    params.forEach((param) => {
        const splitParam = param.split('=');
        searchParams[splitParam[0]] = splitParam[1];
    });

    return searchParams;
};