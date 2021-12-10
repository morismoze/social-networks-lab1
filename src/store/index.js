import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './reducer';

const environment = process.env.REACT_APP_NODE_ENV;

const store = configureStore({
    reducer: rootReducer,
    devTools: environment === 'dev'
});

export default store;