import React, { useEffect } from 'react';

import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import MainRoutes from "./router/Routes";
import Loader from "./components/shared/Loader";
import { actions as userActions } from './store/shared/user/User.actions';
import { getUserLocation } from "./util/location";
import store from "./store";
import './App.scss';

const App = () => {
    useEffect(() => {
        getUserLocation((location) => store.dispatch(userActions.getUserCountry(location)));
    }, []);

    return (
      <Provider store={store}>
          <BrowserRouter>
              <MainRoutes/>
          </BrowserRouter>
          <Loader/>
      </Provider>
    );
}

export default App;
