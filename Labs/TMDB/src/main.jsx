import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Theme from "./components/ui/Theme.jsx";
import {ThemeProvider} from "@mui/material";

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        <ThemeProvider theme={Theme}>
        <App />
        </ThemeProvider>
    </BrowserRouter>
);