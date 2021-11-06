import React from 'react';

import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import MainRoutes from "./router/Routes";
import Loader from "./components/shared/Loader";
import store from "./store";
import './App.scss';

const App = () => {
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
