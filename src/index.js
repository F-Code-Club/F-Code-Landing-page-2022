import React from 'react';

import ReactDOM from 'react-dom/client';

import Toast from './components/ToastNorification/index';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RouterComponent from './routes';
import { UserProvider } from './utils/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <UserProvider>
            <RouterComponent />
            <Toast />
        </UserProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
