import React from 'react';

import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import Routes from "./router/Routes";
import store from "./store";
import './App.scss';
import Loader from "./components/shared/Loader";

const App = () => {
    return (
      <Provider store={store}>
          <BrowserRouter>
              <Routes/>
          </BrowserRouter>
          <Loader/>
      </Provider>
    );
}

export default App;
