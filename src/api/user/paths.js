const apiUrl = process.env.REACT_APP_API_BASE_URL

const api = {
    userData: `${apiUrl}/user/store`
};

export const facebook = {
    storeUserData: () => api.userData
};