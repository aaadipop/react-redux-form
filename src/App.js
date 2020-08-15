import React from 'react';
import './App.css';

import { Provider } from "react-redux";
import { reduxStore } from "./redux/Store";

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import FormPage from "./FormPage"

function App() {
  return (
    <Provider store={reduxStore}>
      <CssBaseline />
      <Container maxWidth="lg">
        <FormPage />
      </Container>
    </Provider>
  );
}

export default App;
