import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/global.scss';

import App from './App';

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)