import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './DefaultStyles';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop>
            <App />
        </ScrollToTop>
    </BrowserRouter>,
    document.getElementById('root')
);
