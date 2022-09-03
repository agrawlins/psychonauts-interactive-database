import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import { AxiosContextProvider } from './Components/Context/AxiosContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AxiosContextProvider>
    <App />
  </AxiosContextProvider>
);