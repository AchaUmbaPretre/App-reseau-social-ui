import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/Font-Awesome-6.x/css/all.css'
import App from './App';
import { DarkContextProvider } from './context/ModeContext';
import { AuthContextProvider } from './context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkContextProvider>
  </React.StrictMode>
);

