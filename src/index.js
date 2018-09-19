import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {EatonThemes} from '@pxblue/themes/react/src';

render(
  <MuiThemeProvider theme={createMuiTheme(EatonThemes.blue)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>
  , document.getElementById('root'));