import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import mokeNavigation from './components/header/navigation/navigation';
import FarmerPage from './components/farmer-page';
import { ThemeProvider } from "styled-components";
import {defaultTheme} from "./thems/default"

const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
    );
