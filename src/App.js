import React from 'react';

import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { Collapse } from "@mui/material";
import { makeStyles } from "@mui/styles";

import MainRoutes from "./router/Routes";
import Loader from "./components/shared/Loader";
import store from "./store";
import colors from './styles/colors.module.scss';
import './App.scss';

const useStyles = makeStyles(({ theme }) => ({
    variantSuccess: {
        backgroundColor: `${colors.golden} !important`,
    },
    variantError: {
        backgroundColor: `${colors.golden} !important`,
    },
    variantInfo: {
        backgroundColor: `${colors.golden} !important`,
    },
    variantWarning: {
        backgroundColor: `${colors.golden} !important`,
    },
}));

const App = () => {
    const classes = useStyles();

    return (
      <Provider store={store}>
          <SnackbarProvider
              maxSnack={3}
              classes={classes}
              TransitionComponent={Collapse}
          >
              <BrowserRouter>
                  <MainRoutes/>
              </BrowserRouter>
              <Loader/>
          </SnackbarProvider>
      </Provider>
    );
}

export default App;
